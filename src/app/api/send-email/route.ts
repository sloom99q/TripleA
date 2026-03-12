/**
 * API Route: Send Email
 * 
 * Location: src/app/api/send-email/route.ts
 * 
 * This API route:
 * - Accepts POST requests from the contact form
 * - Validates form data
 * - Sends email using Resend service
 * - Returns success/error response
 * - Server-side processing keeps API key secure
 * 
 * Advantages over client-side email:
 * ✓ API key is hidden (only exposed to server)
 * ✓ Better security
 * ✓ Can add server-side validation
 * ✓ Can log submissions
 * ✓ Can add rate limiting
 */

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { contactEmailTemplate } from "@/components/contacts/emailTemplate";

// Initialize Resend client with API key from environment
const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Interface for incoming request body
 */
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

/**
 * POST handler for contact form submission
 */
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      message: body.message,
    };

    // Send email using Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's verified domain
      to: process.env.CONTACT_EMAIL || "smsazzawi@gmail.com", // Get recipient from env
      replyTo: body.email, // User's email for reply-to
      subject: `New Contact Form Submission: ${body.subject}`,
      html: contactEmailTemplate(emailData),
    });

    // Handle Resend API errors
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send success response
    console.log("Email sent successfully:", result.data?.id);
    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        id: result.data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Disable caching for this API route
 * Email sending should not be cached
 */
export const dynamic = "force-dynamic";
