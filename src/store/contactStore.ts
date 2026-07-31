import { create } from "zustand";
import { contactEmailTemplate } from "@/components/contacts/emailTemplate";

type Status = "idle" | "loading" | "success" | "error";

type SendEmailResponse = { error?: string; message?: string };

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
      

      // Call the Next.js API route instead of external backend
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let responseData: SendEmailResponse = {};
      try {
        const text = await res.text();
        if (text) {
          responseData = JSON.parse(text) as SendEmailResponse;
        }
      } catch (parseError) {
        console.error("Failed to parse response:", parseError);
        responseData = {};
      }
      

      if (!res.ok) {
        const errorMessage = responseData.error || responseData.message || "Failed to send email";
        console.error("Email send failed:", errorMessage, responseData);
        throw new Error(errorMessage);
      }

      // Success case - email was sent
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
