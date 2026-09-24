import { sendAdminNotification, sendUserConfirmation } from "@/lib/mailer";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  industry: z.string().min(1),
  geography: z.array(z.string()).default([]),
  companySizes: z.array(z.string()).default([]),
  roles: z.array(z.string()).default([]),
  techFilters: z.array(z.string()).default([]),
  volume: z.number().min(1),
  deadline: z.string().optional(),
  contactName: z.string().min(2),
  contactEmail: z.string().email(),
  company: z.string().optional(),
  consent: z.boolean().refine((v) => v === true),
  website: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    if (data.website) return NextResponse.json({ success: true });

    const adminHtml = `
      <h2>New Order Submission</h2>
      <p><strong>Contact:</strong> ${data.contactName} (${data.contactEmail})</p>
      <p><strong>Company:</strong> ${data.company || "—"}</p>
      <p><strong>Industry:</strong> ${data.industry}</p>
      <p><strong>Geography:</strong> ${data.geography.join(", ") || "—"}</p>
      <p><strong>Company Sizes:</strong> ${data.companySizes.join(", ") || "—"}</p>
      <p><strong>Roles:</strong> ${data.roles.join(", ") || "—"}</p>
      <p><strong>Tech Filters:</strong> ${data.techFilters.join(", ") || "—"}</p>
      <p><strong>Volume:</strong> ${data.volume}</p>
      <p><strong>Deadline:</strong> ${data.deadline || "—"}</p>
    `;
    await sendAdminNotification(
      `Order: ${data.contactName} — ${data.volume} leads`,
      adminHtml,
    );

    const userHtml = `
      <h2>Order received, ${data.contactName}!</h2>
      <p>Thank you for placing an order with ProspectListBuilding. Here's a summary:</p>
      <ul>
        <li><strong>Industry:</strong> ${data.industry}</li>
        <li><strong>Volume:</strong> ${data.volume} contacts</li>
        <li><strong>Geography:</strong> ${data.geography.join(", ") || "Not specified"}</li>
        <li><strong>Deadline:</strong> ${data.deadline || "Standard"}</li>
      </ul>
      <p>Our team will review the requirements and send a confirmation with pricing and timeline within one business day.</p>
      <p>— The ProspectListBuilding Team</p>
    `;
    await sendUserConfirmation(
      data.contactEmail,
      "Your ProspectListBuilding order confirmation",
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
