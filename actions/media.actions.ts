'use server';

import { createServerSupabaseClient } from '@/lib/supabase/server';
import { handleApiError, UnauthorizedError } from '@/lib/errors';

export async function deleteMediaAssetAction(storagePath: string) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new UnauthorizedError('Must be logged in to delete media');
    }

    const { error } = await supabase.storage
      .from('media')
      .remove([storagePath]);

    if (error) {
      throw error;
    }

    await supabase.from('audit_logs').insert([
      {
        user_id: user.id,
        action: 'DELETE_MEDIA',
        entity_type: 'media',
        details: { path: storagePath },
      },
    ]);

    return {
      success: true,
    };
  } catch (error) {
    return handleApiError(error);
  }
}
