// app/api/careers/route.ts
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name     = formData.get("name") as string;
    const email    = formData.get("email") as string;
    const phone    = formData.get("phone") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const cv       = formData.get("cv") as File | null;

    if (!name || !email || !phone || !cv) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Convert CV file to base64 for Resend attachment
    const cvBuffer = await cv.arrayBuffer();
    const cvBase64 = Buffer.from(cvBuffer).toString("base64");

    await resend.emails.send({
      from: "Careers <onboarding@resend.dev>", // change after domain verified
      to: "hello@rezenait.com",                // your company inbox
      replyTo: email,
      subject: `New Application: ${jobTitle} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3643D9;">New Job Application</h2>
          <h3 style="color: #040E77; margin-top: 0;">${jobTitle}</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td></tr>
          </table>
          <p style="color: #666; margin-top: 16px;">CV attached below.</p>
        </div>
      `,
      attachments: [
        {
          filename: cv.name,
          content: cvBase64,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers email error:", error);
    return NextResponse.json({ error: "Failed to send application" }, { status: 500 });
  }
}