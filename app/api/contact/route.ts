import { sendAdminNotification, sendUserConfirmation } from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Honeypot check
    if (data.website) {
      return NextResponse.json({ success: true });
    }

    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "—"}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `;

    await sendAdminNotification(`Contact: ${data.name}`, adminHtml);

    const userHtml = `
      <h2>Thanks for reaching out, ${data.name}!</h2>
      <p>We received your message and will get back to you within one business day.</p>
      <p>Here's a copy of what you sent:</p>
      <blockquote style="border-left:3px solid #10b981;padding-left:12px;color:#555;">
        ${data.message.replace(/\n/g, "<br>")}
      </blockquote>
      <p>— The DreamLeadAgency Team</p>
    `;
    await sendUserConfirmation(
      data.email,
      "We received your message — DreamLeadAgency",
      userHtml,
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: err.errors },
        { status: 400 },
      );
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
