import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {email, name, message} = body;

    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['carlosmgonzalez1998@gmail.com'],
      subject: 'Message from portafolio',
      react: EmailTemplate({ name, message, email }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  };
};