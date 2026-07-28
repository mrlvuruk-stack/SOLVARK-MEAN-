'use server';

import { revalidatePath } from 'next/cache';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { projectCmsSchema } from '@/lib/validation/cms';
import { handleApiError, UnauthorizedError, ValidationError } from '@/lib/errors';
import { z } from 'zod';

export async function upsertProjectAction(input: z.infer<typeof projectCmsSchema>) {
  try {
    const validated = projectCmsSchema.safeParse(input);
    if (!validated.success) {
      throw new ValidationError('Validation failed', validated.error.format());
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new UnauthorizedError('Must be logged in to manage portfolio projects');
    }

    const payload = {
      ...(validated.data.id ? { id: validated.data.id } : {}),
      title: validated.data.title,
      slug: validated.data.slug,
      client_name: validated.data.clientName,
      industry: validated.data.industry,
      short_description: validated.data.shortDescription,
      full_description: validated.data.fullDescription,
      challenge: validated.data.challenge,
      solution: validated.data.solution,
      results: validated.data.results,
      live_url: validated.data.liveUrl,
      github_url: validated.data.githubUrl,
      featured: validated.data.featured,
      status: validated.data.status,
      seo_title: validated.data.seo?.seoTitle,
      seo_description: validated.data.seo?.metaDescription,
      updated_at: new Date().toISOString(),
      ...(validated.data.id ? {} : { created_by: user.id }),
    };

    const { data, error } = await supabase
      .from('projects')
      .upsert(payload)
      .select()
      .single();

    if (error) {
      throw error;
    }

    // Log to Audit Trail
    await supabase.from('audit_logs').insert([
      {
        user_id: user.id,
        action: validated.data.id ? 'UPDATE_PROJECT' : 'CREATE_PROJECT',
        entity_type: 'project',
        entity_id: data.id,
        details: { title: data.title, status: data.status },
      },
    ]);

    // ISR revalidation
    revalidatePath('/portfolio');
    revalidatePath(`/portfolio/${data.slug}`);

    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleApiError(error);
  }
}

export async function deleteProjectAction(id: string) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new UnauthorizedError();
    }

    // Soft delete
    const { data, error } = await supabase
      .from('projects')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      throw error;
    }

    await supabase.from('audit_logs').insert([
      {
        user_id: user.id,
        action: 'DELETE_PROJECT',
        entity_type: 'project',
        entity_id: id,
      },
    ]);

    revalidatePath('/portfolio');

    return {
      success: true,
      data,
    };
  } catch (error) {
    return handleApiError(error);
  }
}
