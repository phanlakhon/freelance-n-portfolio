import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact Form API Route
 * 
 * This is an example implementation. You can integrate with:
 * - Email services (Resend, SendGrid, Mailgun)
 * - Form services (Formspree, Web3Forms)
 * - Database (for storing submissions)
 * - Notification services (Slack, Discord)
 */

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, projectType, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // ========================================
    // Option 1: Send Email with Resend
    // ========================================
    // Uncomment and configure when ready to use
    
    /*
    const resendApiKey = process.env.RESEND_API_KEY;
    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'contact@yourdomain.com',
        to: 'your.email@example.com',
        subject: `New Contact: ${projectType || 'General Inquiry'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      throw new Error('Failed to send email');
    }
    */

    // ========================================
    // Option 2: Send to Slack
    // ========================================
    /*
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
    
    await fetch(slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: `🆕 New Contact Form Submission`,
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*New Contact Form Submission*\n\n*Name:* ${name}\n*Email:* ${email}\n*Project Type:* ${projectType || 'Not specified'}\n*Message:*\n${message}`
            }
          }
        ]
      }),
    });
    */

    // ========================================
    // Option 3: Save to Database
    // ========================================
    /*
    // Example with Supabase
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        { name, email, project_type: projectType, message }
      ]);

    if (error) throw error;
    */

    // ========================================
    // Option 4: Use Formspree (Client-side)
    // ========================================
    // Just update the form action in Contact.tsx to:
    // <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">

    // For development: Just log the submission
    console.log('Contact form submission:', { name, email, projectType, message });

    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'ข้อความถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง' },
      { status: 500 }
    );
  }
}

// Prevent GET requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
