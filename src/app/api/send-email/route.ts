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
      console.error("Missing required fields:", {
        name: !!body.name,
        email: !!body.email,
        phone: !!body.phone,
        subject: !!body.subject,
        message: !!body.message,
      });
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
    // NOTE: When using onboarding@resend.dev (free tier without verified domain),
    // you can ONLY send emails to the email address that registered the Resend account.
    // To send to any email (like info@triple-a.ae), you must:
    // 1. Add and verify your domain (triple-a.ae) in Resend dashboard
    // 2. Use your verified domain as the "from" address (e.g., noreply@triple-a.ae)
    const recipientEmail = process.env.CONTACT_EMAIL || "info@triple-a.ae";
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Use Resend's verified domain
      to: recipientEmail,
      replyTo: body.email, // User's email for reply-to
      subject: `New Contact Form Submission: ${body.subject}`,
      html: contactEmailTemplate(emailData),
    });

    // Handle Resend API errors
    if (result.error) {
      console.error("Resend error:", JSON.stringify(result.error, null, 2));
      
      // Check for invalid API key
      if (result.error.statusCode === 401) {
        return NextResponse.json(
          { 
            error: "Invalid Resend API key. Please check your environment variables.",
            details: "Check that RESEND_API_KEY is set correctly in .env.local"
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { 
          error: "Failed to send email", 
          details: result.error.message,
          statusCode: result.error.statusCode
        },
        { status: 500 }
      );
    }

    // Send success response
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
