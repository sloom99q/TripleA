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

    if (Object.keys(errors).length) {
      set({ errors });
      return;
    }

    try {
      set({ status: "loading", popoverOpen: true });

      const res = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: `${formData.name} <onboarding@resend.dev>`,
          to: "smsazzawi@gmail.com",
          subject: formData.subject,
          html: contactEmailTemplate(formData),
        }),
      });

      if (!res.ok) throw new Error("Failed");

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
    } catch {
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
