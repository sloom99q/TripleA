'use client';

import { useEffect, useRef } from "react";
import {
  Button,
  Select,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import ContactOptions from "@/mockups/ContactOptions";
import { useContactStore } from "@/store/contactStore";
import ContactStatus from "@/components/contacts/ContactStatus";

/**
 * Reusable contact form (Resend-backed via contactStore). Used on the /contact
 * page (light) and by the homepage HeroLeadForm.
 *
 * - `autoFocusMessage`: optional; moves the caret to the Message field on mount.
 * - `dark`: optional; restyles the form for a dark surface (light labels, dark
 *   inputs, inverted submit) so it can sit on a black card without touching the
 *   light /contact page. Both default off.
 */
export default function ContactForm({
  autoFocusMessage = false,
  dark = false,
}: {
  autoFocusMessage?: boolean;
  dark?: boolean;
} = {}) {
  const {
    formData,
    errors,
    setField,
    submit,
    status,
    popoverOpen,
    closePopover,
  } = useContactStore();

  const messageRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!autoFocusMessage) return;
    // The form may mount inside a Mantine <Collapse> that is display:none for
    // the first frame(s); focusing then is a browser no-op. Defer two rAFs.
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        const el = messageRef.current;
        if (!el) return;
        el.focus();
        const end = el.value.length;
        el.setSelectionRange(end, end);
      });
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [autoFocusMessage]);

  const labelStyles = dark ? { color: "rgba(255,255,255,0.85)" } : undefined;
  const inputBase = dark
    ? {
        padding: "12px 16px",
        backgroundColor: "#ffffff",
        borderColor: "transparent",
        color: "#1a1a1a",
        "::placeholder": { color: "rgba(0,0,0,0.4)" },
      }
    : { padding: "12px 16px", borderColor: "rgb(222, 226, 230)" };

  return (
    <>
      <Stack
        bg={dark ? "transparent" : "#f7f7f7"}
        p={25}
        style={{ borderTopLeftRadius: 50, borderBottomRightRadius: 50 }}
        gap="lg"
      >
        <Select
          label="Subject"
          value={formData.subject}
          data={ContactOptions}
          error={errors.subject}
          onChange={(v) => setField("subject", v!)}
          placeholder="Select subject"
          withAsterisk
          radius={"xl"}
          styles={{ input: inputBase, label: labelStyles }}
        />

        <TextInput
          label="Name"
          value={formData.name}
          error={errors.name}
          onChange={(e) => setField("name", e.currentTarget.value)}
          placeholder="John Doe"
          radius={"xl"}
          withAsterisk
          styles={{ input: inputBase, label: labelStyles }}
        />

        <TextInput
          label="Phone Number"
          value={formData.phone}
          error={errors.phone}
          onChange={(e) => setField("phone", e.currentTarget.value)}
          placeholder="050 505 5005"
          withAsterisk
          radius={"xl"}
          styles={{
            input: {
              ...inputBase,
              "::placeholder": {
                fontFamily: "Inter, sans-serif",
                ...(dark ? { color: "rgba(0,0,0,0.4)" } : {}),
              },
            },
            label: labelStyles,
          }}
        />

        <TextInput
          label="Email address"
          value={formData.email}
          error={errors.email}
          onChange={(e) => setField("email", e.currentTarget.value)}
          placeholder="info@triple-a.ae"
          withAsterisk
          radius={"xl"}
          styles={{ input: inputBase, label: labelStyles }}
        />

        <Textarea
          ref={messageRef}
          label="Message"
          value={formData.message}
          error={errors.message}
          minRows={6}
          styles={{
            input: { ...inputBase, height: "100px" },
            label: labelStyles,
          }}
          onChange={(e) => setField("message", e.currentTarget.value)}
          placeholder="Your message"
          withAsterisk
          radius={"md"}
        />

        <Button
          fullWidth
          bg={dark ? "white" : "black"}
          c={dark ? "#000" : "#fff"}
          size="md"
          fw={700}
          radius={"xl"}
          loading={status === "loading"}
          onClick={submit}
        >
          Submit
        </Button>
      </Stack>

      <ContactStatus
        opened={popoverOpen}
        status={status}
        onClose={closePopover}
      />
    </>
  );
}
