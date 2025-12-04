import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { name, email, subject, message } = result.data;
    const supabase = await createServerClient();

    const { error } = await supabase
      .from('contact_submissions')
      .insert({ name, email, subject, message });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent!' }, { status: 200 });
  } catch (error) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
