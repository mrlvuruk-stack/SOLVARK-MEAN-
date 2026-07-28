import { createClient } from '@supabase/supabase-js';
import { getEnv } from '@/lib/validation/env';

export function createAdminClient() {
  const env = getEnv();
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY || env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return createClient(env.NEXT_PUBLIC_SUPABASE_URL, serviceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
