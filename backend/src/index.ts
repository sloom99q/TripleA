import dotenv from "dotenv";
dotenv.config();

import { serve } from "bun";
import { sendEmail } from "./email/sendEmail";
import { initDatabase } from "./schema";

console.log("API key:", process.env.RESEND_API_KEY);
initDatabase();

serve({
  port: 3001,
  async fetch(req) {
    const url = new URL(req.url);

    // Allow CORS for all origins
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*", // or specify "http://localhost:5173"
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // Handle preflight request
    if (req.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    if (req.method === "POST" && url.pathname === "/send-email") {
    const body = await req.json();
    console.log("EMAIL REQUEST RECEIVED", body);

    const result = await sendEmail({
        from: (body as any).from,
        to: (body as any).to,
        subject: (body as any).subject,
        html: (body as any).html,
    });

    console.log("RESEND RESULT:", result);

    return new Response(JSON.stringify({ success: true }), {
        headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
        },
    });
    }

    return new Response("Not Found", {
      status: 404,
      headers: corsHeaders,
    });
  },
});
