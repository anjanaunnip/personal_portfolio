import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Mark route as dynamic - prevent build-time execution
export const dynamic = 'force-dynamic';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    // Import Prisma only at request time
    const { PrismaClient } = await import('@prisma/client');
    const { Resend } = await import('resend');

    const prisma = new PrismaClient();
    const body = await request.json();

    // Validate the input
    const { name, email, message } = contactSchema.parse(body);

    console.log('[v0] ✓ Contact message received:', { name, email, messageLength: message.length });

    // Save to database
    let savedMessage;
    try {
      savedMessage = await prisma.contactMessage.create({
        data: {
          name,
          email,
          message,
        },
      });
      console.log('[v0] ✓ Database saved successfully:', { id: savedMessage.id });
    } catch (dbError) {
      console.error('[v0] ✗ Database save failed:', dbError);
      throw new Error(`Database error: ${dbError instanceof Error ? dbError.message : 'Unknown error'}`);
    }

    // Send email to your Gmail using Resend
    const emailContent = `
      <h2>New Portfolio Contact Message</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Date:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    if (!process.env.RESEND_API_KEY) {
      console.warn('[v0] ⚠ RESEND_API_KEY not set, skipping email');
    } else {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const emailResponse = await resend.emails.send({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: 'anjanaunnikrishnan178@gmail.com',
          subject: 'New Portfolio Contact Message',
          html: emailContent,
        });

        if (emailResponse.error) {
          console.error('[v0] ✗ Email sending failed:', emailResponse.error);
          throw new Error(`Resend error: ${JSON.stringify(emailResponse.error)}`);
        }

        console.log('[v0] ✓ Email sent successfully to Gmail:', { messageId: emailResponse.data?.id });
      } catch (emailError) {
        console.error('[v0] ✗ Email error:', emailError instanceof Error ? emailError.message : String(emailError));
        throw emailError;
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully! Thank you for reaching out.',
      data: {
        id: savedMessage.id,
        name,
        email,
        createdAt: savedMessage.createdAt,
      },
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('[v0] ✗ Contact form error:', errorMessage);

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
        debug: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
      },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
