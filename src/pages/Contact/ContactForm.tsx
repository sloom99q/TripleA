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
import { IconBrandGmail } from '@tabler/icons-react';

export default function ContactForm() {
  const {
    formData,
    errors,
    setField,
    submit,
    status,
    openPopover,
    popoverOpen,
    closePopover,
  } = useContactStore();

  return (
    <>
      <Stack
        bg="#f7f7f7"
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
          radius={'xl'}
          styles={{
              input: {
                padding: '12px 16px',
                borderColor:'rgb(222, 226, 230)',
                }}
            }
        />

        <TextInput
          label="Name"
          value={formData.name}
          error={errors.name}
          onChange={(e) => setField("name", e.currentTarget.value)}
          placeholder="John Doe"
          radius={'xl'}
          withAsterisk
                    styles={{
              input: {
                padding: '12px 16px',
                borderColor:'rgb(222, 226, 230)',
                }}
            }
        />

        <TextInput
          label="Phone Number"
          value={formData.phone}
          error={errors.phone}
          onChange={(e) => setField("phone", e.currentTarget.value)}
          placeholder="050 505 5005"
          withAsterisk
          radius={'xl'}
            styles={{
              input: {
                borderColor:'rgb(222, 226, 230)',
                padding: '12px 16px',
                '::placeholder': {
                  fontFamily: "Inter, sans-serif",
                }}
            }}
        />

        <TextInput
          label="Email address"
          value={formData.email}
          error={errors.email}
          onChange={(e) => setField("email", e.currentTarget.value)}
          placeholder="info@triple-a.ae"
          withAsterisk
          radius={'xl'}
                              styles={{
              input: {
                padding: '12px 16px',
                borderColor:'rgb(222, 226, 230)',
                }}
            }
        />

        <Textarea
          label="Message"
          value={formData.message}
          error={errors.message}
          minRows={6}
          styles={{
              input: {
                padding: '12px 16px',
                borderColor:'rgb(222, 226, 230)',
                height: "100px",
                }}
            }
          onChange={(e) => setField("message", e.currentTarget.value)}
          placeholder="Your message"
          withAsterisk
          radius={'md'}
            
        />

        <Button
          fullWidth
          bg="black"
          size="md"
          fw={700}
          radius={'xl'}
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
