import { create } from "zustand";
import { contactEmailTemplate } from "@/components/contacts/emailTemplate";

type Status = "idle" | "loading" | "success" | "error";

type ContactState = {
  formData: {
    subject: string;
    name: string;
    phone: string;
    email: string;
    message: string;
  };
  errors: Record<string, string>;
  status: Status;
  popoverOpen: boolean;

  setField: (field: string, value: string) => void;
  submit: () => Promise<void>;
  openPopover: () => void;
  closePopover: () => void;
};

export const useContactStore = create<ContactState>((set, get) => ({
  formData: {
    subject: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  },

  errors: {},
  status: "idle",
  popoverOpen: false,

  setField: (field, value) =>
    set((state) => ({
      formData: { ...state.formData, [field]: value },
      errors: { ...state.errors, [field]: "" },
    })),

  submit: async () => {
    const { formData } = get();

    const errors: Record<string, string> = {};
    if (!formData.subject) errors.subject = "Subject is required";
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone) errors.phone = "Phone is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.message) errors.message = "Message is required";

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (Object.keys(errors).length) {
      set({ errors });
      return;
    }

    try {
      set({ status: "loading", popoverOpen: true });

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };
      
      console.log("Sending contact form:", payload);

      // Call the Next.js API route instead of external backend
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", res.status, "Content-Type:", res.headers.get("content-type"));
      
      let responseData: any = {};
      try {
        const text = await res.text();
        console.log("Raw response text:", text);
        if (text) {
          responseData = JSON.parse(text);
        }
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        responseData = {};
      }
      
      console.log("Parsed API Response:", responseData, "Status:", res.status);

      if (!res.ok) {
        const errorMessage = responseData.error || responseData.message || "Failed to send email";
        console.error("Email send failed:", errorMessage, responseData);
        throw new Error(errorMessage);
      }

      // Success case - email was sent
      console.log("Email sent successfully!", responseData);
      set({
        status: "success",
        formData: {
          subject: "interior fit-out",
          name: "",
          phone: "",
          email: "",
          message: "",
        },
        errors: {},
      });
    } catch (error) {
      console.error("Submit error:", error);
      set({ status: "error" });
    }
  },

  openPopover: () =>
    set({
      popoverOpen: true,
      status: 'success',
    }),
  
  closePopover: () =>
    set({
      popoverOpen: false,
      status: "idle",
    }),
}));
