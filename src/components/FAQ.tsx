import React, { useState } from 'react';
import { Container, Title, Text, Paper, Collapse, Group, Box, } from '@mantine/core';
import { IconPlus, IconX } from '@tabler/icons-react';
import CustomBadge from './CustomBadge';
import { FAQData, FAQItemType } from '@/mockups/FAQData';

const FAQItem = ({ question, answer, defaultOpen }: FAQItemType) => {
  const [opened, setOpened] = useState(defaultOpen);

  return (
    <Paper 
      p="xl" 
      mb="md" 
      style={{ 
        backgroundColor: opened ? 'rgb(247, 247, 247)' : '#ffffff',
        borderTopLeftRadius: 60,
        borderBottomRightRadius: 60,
        // borderBottomLeftRadius: opened ? 0 : 24,
        // borderBottomRightRadius: opened ? 0 : 24,
        border: 'none',
        transition: 'background-color 0.2s ease'
      }}
    >
      <Group 
        justify="space-between" 
        style={{ cursor: 'pointer' }}
        onClick={() => setOpened(!opened)}
      >
        <Text 
          size="md" 
          fw={500}
          style={{ flex: 1, paddingRight: '1rem' }}
        >
          {question}
        </Text>
        <Box 
          style={{ 
            minWidth: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {opened ? (
            <IconX size={24} stroke={1.5} />
          ) : (
            <IconPlus size={24} stroke={1.5} />
          )}
        </Box>
      </Group>
      
        <Collapse in={opened} transitionDuration={300}>
        <Text 
          mt="md" 
          c="dimmed" 
          // ta={'justify'}
          ta={'left'}
          size="md"
          style={{ lineHeight: 1.6 }}
        >
          {answer}
        </Text>
      </Collapse>
    </Paper>
  );
};

export default function FAQComponent() {
  return (
      <Group 
        align="flex-start" 
        gap={60}
        style={{ 
          flexWrap: 'wrap'
        }}
      >
        {/* Left Section */}
        <Box style={{ 
          // flex: '0 0 400px',
          maxWidth: '400px',
          minWidth: 0
        }}>
          <CustomBadge>
            FAQ
          </CustomBadge>
          <Title 
            order={1} 
            size='clamp(2rem, 5vw, 3rem)'
            fw={500}
            mt={'sm'}
            style={{ 
              lineHeight: 1.2,
              marginBottom: 0
            }}
          >
            Everything you might want to know.
          </Title>
        </Box>

        {/* Right Section - FAQ Items */}
        <Box style={{ flex: '1 1 400px', minWidth: 0 }}>
          {FAQData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={faq.defaultOpen}
            />
          ))}
        </Box>
      </Group>
  );
}