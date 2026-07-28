'use server';

import { revalidatePath } from 'next/cache';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { serviceCmsSchema } from '@/lib/validation/cms';
import { handleApiError, UnauthorizedError, ValidationError } from '@/lib/errors';
import { z } from 'zod';

export async function upsertServiceAction(input: z.infer<typeof serviceCmsSchema>) {
  try {
    const validated = serviceCmsSchema.safeParse(input);
    if (!validated.success) {
      throw new ValidationError('Validation failed', validated.error.format());
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new UnauthorizedError('Must be logged in to manage services');
    }

    const payload = {
      ...(validated.data.id ? { id: validated.data.id } : {}),
      title: validated.data.title,
      slug: validated.data.slug,
      icon_name: validated.data.iconName,
      banner_url: validated.data.bannerUrl,
      short_description: validated.data.shortDescription,
      long_description: validated.data.longDescription,
      features: validated.data.features,
      technologies: validated.data.technologies,
      featured: validated.data.featured,
      seo_title: validated.data.seo?.seoTitle,
      seo_description: validated.data.seo?.metaDescription,
      updated_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from('services')
      .upsert(payload)
      .select()
      .single();

    if (error) {
      throw error;
    }

    await supabase.from('audit_logs').insert([
      {
        user_id: user.id,
        action: validated.data.id ? 'UPDATE_SERVICE' : 'CREATE_SERVICE',
        entity_type: 'service',
        entity_id: data.id,
        details: { title: data.title },
      },
    ]);

    revalidatePath('/services');
    revalidatePath(`/services/${data.slug}`);

    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleApiError(error);
  }
}
