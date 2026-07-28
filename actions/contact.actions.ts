'use server';

import { z } from 'zod';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import { handleApiError, ValidationError } from '@/lib/errors';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  serviceInterest: z.string().optional(),
  budgetRange: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type ContactInput = z.infer<typeof contactSchema>;

export async function submitContactLeadAction(formData: ContactInput) {
  try {
    const validated = contactSchema.safeParse(formData);
    if (!validated.success) {
      throw new ValidationError('Invalid form data', validated.error.format());
    }

    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase.from('contact_leads').insert([
      {
        full_name: validated.data.fullName,
        email: validated.data.email,
        phone: validated.data.phone,
        company_name: validated.data.companyName,
        service_interest: validated.data.serviceInterest,
        budget_range: validated.data.budgetRange,
        message: validated.data.message,
        status: 'new',
      },
    ]);

    if (error) {
      throw error;
    }

    return {
      success: true,
      message: 'Thank you! Your request has been submitted successfully.',
      data,
    };
  } catch (error) {
    return handleApiError(error);
  }
}
