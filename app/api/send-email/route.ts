import CONSTANTS from "@/app/shared/constants";
import { mailOptions, transporter } from "@/lib/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, message, name, subject } = body;
  const html = CONSTANTS.NODEMAILER.BODY.replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{subject}}", subject)
    .replace("{{message}}", message);

  const mail = mailOptions(process.env.DESTINATION_EMAIL!, subject, html);
  transporter.sendMail(mail);
  return NextResponse.json(
    {
      message: "Email sent successfully!",
    },
    {
      status: 200,
    }
  );
}
