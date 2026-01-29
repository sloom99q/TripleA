import React, { useEffect } from 'react';
import { useState } from "react";

const EmailPrompt: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSendEmail = async () => {
      setLoading(true);
      setSuccess(null);
      setError(null);
    
      try {
        const res = await fetch("http://localhost:3001/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "Resend <onboarding@resend.dev>",
            to: "smsazzawi@gmail.com",
            subject: "Hello from React!",
            html: "<strong>It works!</strong>",
          }),
        });
    
        const data = await res.json();
        console.log("Response:", data);
        
        if (data.success) {
          setSuccess("Email sent successfully!");
        } else {
          setError("Failed to send email");
        }
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    
    return (
        <>
            <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleSendEmail} disabled={loading}>
        {loading ? "Sending..." : "Send Email"}
      </button>
      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
        </>
    );
};

export default EmailPrompt;