import fs from 'fs'
import path from 'path'
import nodemailer from 'nodemailer'

const envPath = path.resolve(process.cwd(), '.env')
const envContent = fs.readFileSync(envPath, 'utf-8')
const env: Record<string, string> = {}
envContent.split('\n').forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
  if (match) {
    let value = match[2] || ''
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1)
    }
    env[match[1]] = value.trim()
  }
})

async function testMail() {
  console.log('Testing SMTP connection...')
  console.log('User:', env.MAIL_USERNAME)
  console.log('Host:', env.MAIL_HOST || 'smtp.gmail.com')
  console.log('Port:', env.MAIL_PORT)

  const transporter = nodemailer.createTransport({
    host: env.MAIL_HOST || 'smtp.gmail.com',
    port: Number(env.MAIL_PORT) || 587,
    secure: false, // 587 uses STARTTLS
    auth: {
      user: env.MAIL_USERNAME,
      pass: env.MAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  try {
    console.log('Verifying transporter credentials...')
    await transporter.verify()
    console.log('SMTP Connection verified successfully!')

    const info = await transporter.sendMail({
      from: `"${env.MAIL_FROM_NAME || 'Test'}" <${env.MAIL_FROM_ADDRESS}>`,
      to: env.MAIL_TO_ADDRESS,
      subject: 'Test Email from Portfolio',
      text: 'This is a test email.'
    })

    console.log('Email sent successfully! Message ID:', info.messageId)
  } catch (err) {
    console.error('SMTP Error details:', err)
  }
}

testMail()
