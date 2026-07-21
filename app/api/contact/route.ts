import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

function getEnvVar(key: string, defaultValue: string = ''): string {
  const val = process.env[key] || defaultValue
  return val.replace(/^"(.*)"$/, '$1').trim()
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    const host = getEnvVar('MAIL_HOST', 'smtp.gmail.com')
    const port = Number(getEnvVar('MAIL_PORT', '587'))
    const user = getEnvVar('MAIL_USERNAME')
    const pass = getEnvVar('MAIL_PASSWORD')
    const fromAddress = getEnvVar('MAIL_FROM_ADDRESS', user)
    const fromName = getEnvVar('MAIL_FROM_NAME', 'Portfolio Contact')
    const toAddress = getEnvVar('MAIL_TO_ADDRESS', user)

    if (!user || !pass) {
      return NextResponse.json(
        { error: 'Email server configuration is incomplete in .env.' },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // 587 uses STARTTLS
      auth: {
        user,
        pass
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    const mailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: toAddress,
      replyTo: email,
      subject: subject ? `[Portfolio Contact] ${subject}` : `[Portfolio Contact] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f9f9; padding: 15px; border-radius: 4px;">${message}</p>
        </div>
      `
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 })
  } catch (error: unknown) {
    const err = error instanceof Error ? error.message : String(error)
    console.error('Error sending email:', err)
    return NextResponse.json(
      { error: `Failed to send message: ${err}` },
      { status: 500 }
    )
  }
}
