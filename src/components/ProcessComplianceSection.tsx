import { Box, Container, Divider, SimpleGrid, Stack, Text, Title } from "@mantine/core";

/**
 * Process & Compliance — minimalist, content-rich section rendered near the
 * bottom of the Home and Services pages (above the footer).
 *
 * Server component (no "use client"): the copy is in the initial HTML so it is
 * fully crawlable. It carries keyword-relevant body text ("interior fit-out in
 * Dubai", process stages, authority approvals) that the image-heavy hero
 * sections lack. Headings use order={2}/{3} so they never create extra <h1>s.
 */

const STEPS = [
  {
    no: "01",
    title: "Design & Space Planning",
    body: "Concept development, 3D visualisation and layout optimisation tailored to how the space will actually be used.",
  },
  {
    no: "02",
    title: "MEP & Construction",
    body: "Mechanical, electrical and plumbing first-fix, partitions and structural works executed to specification.",
  },
  {
    no: "03",
    title: "Finishes & Joinery",
    body: "Flooring, wall cladding, ceilings, lighting and bespoke joinery installed with a precise, premium finish.",
  },
  {
    no: "04",
    title: "Approvals & Handover",
    body: "Coordination of every authority approval, snagging and a clean, on-time handover ready for occupation.",
  },
];

export default function ProcessComplianceSection() {
  return (
    <Box
      component="section"
      aria-label="Our interior fit-out process and compliance"
      py={{ base: 60, md: 90 }}
    >
      <Container size="lg">
        <Stack gap={4} mb={44}>
          <Text size="xs" fw={600} tt="uppercase" c="dimmed" style={{ letterSpacing: "2px" }}>
            How we work
          </Text>
          <Title
            order={2}
            fw={500}
            size="clamp(1.6rem, 3.5vw, 2.4rem)"
            style={{ letterSpacing: "-0.5px" }}
          >
            Process &amp; Compliance
          </Title>
          <Text size="sm" c="dimmed" mt={8} style={{ maxWidth: 620, lineHeight: 1.7 }}>
            Every interior fit-out in Dubai we deliver follows a disciplined, four-stage process —
            engineered for quality, transparent timelines and full regulatory compliance.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing={{ base: 28, md: 40 }}>
          {STEPS.map((step) => (
            <Stack key={step.no} gap={10}>
              <Text size="xs" fw={600} c="dimmed" style={{ letterSpacing: "1px" }}>
                {step.no}
              </Text>
              <Divider />
              <Title order={3} size="md" fw={600} style={{ letterSpacing: "-0.2px" }}>
                {step.title}
              </Title>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.7 }}>
                {step.body}
              </Text>
            </Stack>
          ))}
        </SimpleGrid>

        <Divider my={44} />

        <Text size="sm" c="dimmed" style={{ maxWidth: 760, lineHeight: 1.8 }}>
          As a Dubai-based fit-out contractor, we manage the full approvals chain on your behalf —
          including Dubai Municipality (DM), DEWA, Trakhees and Civil Defence — so your project stays
          compliant from permit through to completion.
        </Text>
      </Container>
    </Box>
  );
}
