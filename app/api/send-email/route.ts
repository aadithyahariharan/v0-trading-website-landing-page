// import { type NextRequest, NextResponse } from "next/server"

// export const runtime = "nodejs"

// export async function POST(request: NextRequest) {
//   try {
//     const body = await request.json()
//     const { name, email, phone, company, subject, message } = body

//     // Create transporter using Gmail SMTP
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASSWORD,
//       },
//     })

//     // Email content to send to Tradserv
//     const mailOptions = {
//       from: process.env.GMAIL_USER,
//       to: "dninmaa@gmail.com",
//       subject: `New Contact Form Submission: ${subject}`,
//       html: `
//         <h2>New Contact Form Submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Company:</strong> ${company}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message.replace(/\n/g, "<br>")}</p>
//         <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
//       `,
//     }

//     // Send email
//     await transporter.sendMail(mailOptions)

//     console.log("[v0] Email sent successfully to dninmaa@gmail.com")

//     return NextResponse.json({
//       success: true,
//       message: "Thank you for your message. We will get back to you soon!",
//     })
//   } catch (error) {
//     console.error("[v0] Error sending email:", error)
//     return NextResponse.json(
//       { success: false, message: "Failed to send your message. Please try again." },
//       { status: 500 },
//     )
//   }
// }
