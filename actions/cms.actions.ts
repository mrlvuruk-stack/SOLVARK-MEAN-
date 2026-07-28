'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { handleApiError, UnauthorizedError } from '@/lib/errors';

const homepageSectionSchema = z.object({
  sectionKey: z.string().min(1),
  title: z.string().optional(),
  subtitle: z.string().optional(),
  content: z.record(z.unknown()).default({}),
  isEnabled: z.boolean().default(true),
});

export async function updateHomepageSectionAction(
  input: z.infer<typeof homepageSectionSchema>
) {
  try {
    const validated = homepageSectionSchema.parse(input);
    const supabase = await createServerSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new UnauthorizedError('Must be logged in to update CMS content');
    }

    const { data, error } = await supabase
      .from('homepage_sections')
      .upsert({
        section_key: validated.sectionKey,
        title: validated.title,
        subtitle: validated.subtitle,
        content: validated.content,
        is_enabled: validated.isEnabled,
        updated_by: user.id,
        updated_at: new Date().toISOString(),
      })
      .select();

    if (error) {
      throw error;
    }

    // Trigger instant ISR revalidation of homepage
    revalidatePath('/');

    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleApiError(error);
  }
}
