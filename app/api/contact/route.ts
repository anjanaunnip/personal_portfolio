import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the input
    const { name, email, message } = contactSchema.parse(body);

    console.log('[v0] Contact message received:', { name, email, messageLength: message.length });

    // Send email notification via Resend (optional - requires Resend API key)
    if (process.env.RESEND_API_KEY) {
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Portfolio <onboarding@resend.dev>',
            to: email,
            subject: 'Message Received - Anjana Unni P',
            html: `<h2>Thank you for reaching out!</h2><p>Hi ${name},</p><p>I received your message and will get back to you soon.</p><p>Best regards,<br/>Anjana Unni P</p>`,
          }),
        });
        
        if (emailResponse.ok) {
          console.log('[v0] Email sent successfully');
        }
      } catch (emailError) {
        console.log('[v0] Email sending failed:', emailError);
        // Continue anyway - email is optional
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message received! Thank you for reaching out.',
      data: {
        name,
        email,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('[v0] Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
