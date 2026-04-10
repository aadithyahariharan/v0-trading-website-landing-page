import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, subject, message } =
      await req.json()

    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY")
    }

    await resend.emails.send({
      from: "Tradserv <onboarding@resend.dev>",
      to: ["live@tradserv.in"],
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
    console.error("Resend error:", err)
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    )
  }
}
