'use client';

import React, { useId, useState } from 'react';
import { Title, Text, Paper, Collapse, Group, Box, UnstyledButton } from '@mantine/core';
import { IconPlus, IconX } from '@tabler/icons-react';
import CustomBadge from './CustomBadge';
import { FAQData, FAQItemType } from '@/mockups/FAQData';

const FAQItem = ({ question, answer, defaultOpen }: FAQItemType) => {
  const [opened, setOpened] = useState(defaultOpen);
  const panelId = useId();
  const buttonId = useId();

  return (
    <Paper
      p="xl"
      mb="md"
      style={{
        backgroundColor: opened ? 'rgb(247, 247, 247)' : '#ffffff',
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        border: 'none',
        transition: 'background-color 0.2s ease',
      }}
    >
      {/* The question is a real heading whose toggle is a real <button>, so the
          accordion is keyboard-operable and screen-reader friendly. */}
      <Text component="h3" size="md" fw={500} m={0} style={{ lineHeight: 1.4 }}>
        <UnstyledButton
          type="button"
          id={buttonId}
          aria-expanded={opened}
          aria-controls={panelId}
          onClick={() => setOpened((o) => !o)}
          style={{
            width: '100%',
            font: 'inherit',
            color: 'inherit',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <Group justify="space-between" wrap="nowrap" gap="md">
            <Box component="span" style={{ flex: 1 }}>
              {question}
            </Box>
            <Box
              aria-hidden="true"
              style={{
                minWidth: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {opened ? (
                <IconX size={24} stroke={1.5} />
              ) : (
                <IconPlus size={24} stroke={1.5} />
              )}
            </Box>
          </Group>
        </UnstyledButton>
      </Text>

      <Collapse in={opened} transitionDuration={300}>
        <Text
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          mt="md"
          c="#5f636b"
          ta="left"
          size="md"
          style={{ lineHeight: 1.6 }}
        >
          {answer}
        </Text>
      </Collapse>
    </Paper>
  );
};

export default function FAQComponent({
  items = FAQData,
}: {
  items?: FAQItemType[];
} = {}) {
  return (
    <Group align="flex-start" gap={60} style={{ flexWrap: 'wrap' }}>
      {/* Left Section */}
      <Box style={{ maxWidth: '400px', minWidth: 0 }}>
        <CustomBadge>FAQ</CustomBadge>
        <Title
          order={2}
          size="clamp(2rem, 5vw, 3rem)"
          fw={500}
          mt="sm"
          style={{ lineHeight: 1.2, marginBottom: 0 }}
        >
          Interior fit-out in Dubai, answered.
        </Title>
        <Text c="#5f636b" mt="md" size="md" style={{ lineHeight: 1.6 }}>
          Common questions about our fit-out process, MEP, joinery, timelines,
          costs and the Dubai authority approvals we manage for you.
        </Text>
      </Box>

      {/* Right Section - FAQ Items */}
      <Box style={{ flex: '1 1 400px', minWidth: 0 }}>
        {items.map((faq) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            defaultOpen={faq.defaultOpen}
          />
        ))}
      </Box>
    </Group>
  );
}
