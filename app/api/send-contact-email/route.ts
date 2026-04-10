import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, subject, message } =
      await req.json()

    if (!process.env.ZOHO_EMAIL || !process.env.ZOHO_PASSWORD) {
      throw new Error("Missing Zoho email credentials")
    }

    // Configure Zoho Mail transporter
    const transporter = nodemailer.createTransport({
      host: "smtppro.zoho.in",
      port: 465,
      secure: true, // SSL
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    })

    // Send email
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL,
      to: "live@tradserv.in",
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Company:</b> ${company}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Email sending error:", err)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}
