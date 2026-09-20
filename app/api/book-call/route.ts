import { sendAdminNotification, sendUserConfirmation } from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
  website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    if (data.website) return NextResponse.json({ success: true });

    const adminHtml = `
      <h2>New Call Booking Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || "—"}</p>
      <p><strong>Preferred Date:</strong> ${data.preferredDate || "—"}</p>
      <p><strong>Preferred Time:</strong> ${data.preferredTime || "—"}</p>
      <p><strong>Notes:</strong> ${data.notes || "—"}</p>
    `;
    await sendAdminNotification(`Call booking: ${data.name}`, adminHtml);

    const userHtml = `
      <h2>Call request received, ${data.name}</h2>
      <p>Thanks for booking a call. We'll confirm a time shortly based on your preferences:</p>
      <ul>
        <li>Date: ${data.preferredDate || "Flexible"}</li>
        <li>Time: ${data.preferredTime || "Flexible"}</li>
      </ul>
      <p>— DreamLeadAgency</p>
    `;
    await sendUserConfirmation(
      data.email,
      "Call request confirmed — DreamLeadAgency",
      userHtml,
    );

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
