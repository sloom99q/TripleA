import {
  Portal,
  Overlay,
  Paper,
  Stack,
  Text,
  Button,
  ThemeIcon,
  Box,
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
  if (!opened) return null;

  return (
    <Portal>
      {/* FULLSCREEN OVERLAY */}
      <Overlay
        fixed
        blur={8}
        backgroundOpacity={0.75}
        zIndex={10000}
        onClick={onClose}
        style={{
          background:
            "rgba(0,0,0,0.55)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* STOP CLICK PROPAGATION */}
        <Box onClick={(e) => e.stopPropagation()}>
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
                <ThemeIcon
                  size={64}
                  radius="xl"
                  color="green"
                  variant="light"
                //   style={{
                //     backgroundColor: "rgba(0, 255, 13, 1)",
                //   }}
                >
                  <IconCheck size={32} />
                </ThemeIcon>
              )}

              {status === "error" && (
                <ThemeIcon
                  size={64}
                  radius="xl"
                  color="red"
                  variant="light"
                >
                  <IconX size={32} />
                </ThemeIcon>
              )}

              {/* TEXT */}
              {status === "loading" && (
                <>
                  <Text ta={'center'} fw={700} size="lg">
                    Sending message…
                  </Text>
                  <Text size="sm" c="gray.4" ta="center">
                    Please wait a moment
                  </Text>
                </>
              )}

              {status === "success" && (
                <>
                  <Text ta={'center'} fw={800} size="lg">
                    Message Sent
                  </Text>
                  <Text size="sm" c="gray.4" ta="center">
                    We’ve received your request and will contact you shortly.
                  </Text>
                </>
              )}

              {status === "error" && (
                <>
                  <Text ta={'center'} fw={800} size="lg">
                    Something went wrong
                  </Text>
                  <Text size="sm" c="gray.4" ta="center">
                    Please try again later or contact us directly.
                  </Text>
                </>
              )}

              {/* ACTION */}
              {status !== "loading" && (
                <Button
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
      </Overlay>
    </Portal>
  );
}
