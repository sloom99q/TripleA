'use client';

import { useEffect, useRef } from "react";
import {
  Portal,
  Overlay,
  Paper,
  Stack,
  Text,
  Button,
  ThemeIcon,
  Box,
  FocusTrap,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactStatus({
  opened,
  status,
  onClose,
}: {
  opened: boolean;
  status: Status;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  // Remember what was focused when the dialog opened (the Submit button) and
  // return focus there when it closes — required by the aria-modal contract.
  useEffect(() => {
    if (!opened) return;
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    return () => {
      triggerRef.current?.focus?.();
    };
  }, [opened]);

  // Move focus to the Close button once dismissible, and close on Escape.
  useEffect(() => {
    if (!opened) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "loading") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    if (status !== "loading") {
      closeRef.current?.focus();
    }

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [opened, status, onClose]);

  if (!opened) return null;

  return (
    <Portal>
      {/* FULLSCREEN OVERLAY */}
      <Overlay
        fixed
        blur={8}
        backgroundOpacity={0.75}
        zIndex={10000}
        onClick={status !== "loading" ? onClose : undefined}
        style={{
          background: "rgba(0,0,0,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* DIALOG */}
        <FocusTrap active>
          <Box
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-status-title"
            onClick={(e) => e.stopPropagation()}
          >
          <Paper
            radius={32}
            p={40}
            w={'50vw'}
            style={{
              background:
                "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.08) 0%, rgba(10,10,10,0) 30%), linear-gradient(145deg, #080808 0%, #0d0d0d 50%, #060606 100%)",
              color: "white",
              boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
            }}
          >
            <Stack align="center" gap="lg">
              {/* ICON */}
              {status === "success" && (
                <ThemeIcon size={64} radius="xl" color="green" variant="light" aria-hidden="true">
                  <IconCheck size={32} />
                </ThemeIcon>
              )}

              {status === "error" && (
                <ThemeIcon size={64} radius="xl" color="red" variant="light" aria-hidden="true">
                  <IconX size={32} />
                </ThemeIcon>
              )}

              {/* TEXT (announced to screen readers) */}
              <Box aria-live="assertive" style={{ width: "100%" }}>
                <Stack align="center" gap="xs">
                  {status === "loading" && (
                    <>
                      <Text id="contact-status-title" ta="center" fw={700} size="lg">
                        Sending message…
                      </Text>
                      <Text size="sm" c="gray.4" ta="center">
                        Please wait a moment
                      </Text>
                    </>
                  )}

                  {status === "success" && (
                    <>
                      <Text id="contact-status-title" ta="center" fw={800} size="lg">
                        Message Sent
                      </Text>
                      <Text size="sm" c="gray.4" ta="center">
                        We&rsquo;ve received your request and will contact you shortly.
                      </Text>
                    </>
                  )}

                  {status === "error" && (
                    <>
                      <Text id="contact-status-title" ta="center" fw={800} size="lg">
                        Something went wrong
                      </Text>
                      <Text size="sm" c="gray.4" ta="center">
                        Please try again later or contact us directly.
                      </Text>
                    </>
                  )}
                </Stack>
              </Box>

              {/* ACTION */}
              {status !== "loading" && (
                <Button
                  ref={closeRef}
                  data-autofocus
                  fullWidth
                  mt="md"
                  onClick={onClose}
                  style={{
                    backgroundColor: "white",
                    color: "#111",
                    borderRadius: 14,
                    fontWeight: 700,
                  }}
                >
                  Close
                </Button>
              )}
            </Stack>
          </Paper>
          </Box>
        </FocusTrap>
      </Overlay>
    </Portal>
  );
}
