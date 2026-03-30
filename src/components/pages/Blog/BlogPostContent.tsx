'use client';

/**
 * Blog Post Content Component (Client Component)
 * Renders the actual blog post content with PageContainer
 * Separated from the page component to allow server-side static generation
 */

import React from 'react';
import { Container, Title, Text, Box } from '@mantine/core';
import { PageContainer } from '@/layout/PageContainer';

interface BlogPost {
  title: string;
  author: string;
  publishDate: string;
  readTime: string;
  content: string;
}

/**
 * Simple Markdown Renderer Component
 */
function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    // Headings
    if (line.startsWith('## ')) {
      elements.push(
        <Title key={`h2-${i}`} order={2} mt={30} mb={15}>
          {line.replace('## ', '')}
        </Title>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <Title key={`h3-${i}`} order={3} mt={20} mb={12}>
          {line.replace('### ', '')}
        </Title>
      );
    } else if (line.startsWith('#### ')) {
      elements.push(
        <Title key={`h4-${i}`} order={4} mt={15} mb={10}>
          {line.replace('#### ', '')}
        </Title>
      );
    }
    // Lists
    else if (line.startsWith('- ')) {
      const listItems = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].replace('- ', ''));
        i++;
      }
      i--; // Adjust because loop will increment
      elements.push(
        <Box key={`list-${i}`} component="ul" ml={20} mb={15}>
          {listItems.map((item, idx) => (
            <Text key={idx} component="li" mb={5}>
              {item}
            </Text>
          ))}
        </Box>
      );
    }
    // Bold text pattern
    else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
      elements.push(
        <Text key={`bold-${i}`} fw={600} mb={10}>
          {line.replace(/\*\*/g, '')}
        </Text>
      );
    }
    // Tables
    else if (line.includes('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].includes('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      i--;

      if (tableLines.length > 2) {
        const headers = tableLines[0]
          .split('|')
          .map((h) => h.trim())
          .filter((h) => h);
        const rows = tableLines
          .slice(2)
          .map((row) =>
            row
              .split('|')
              .map((cell) => cell.trim())
              .filter((cell) => cell)
          );

        elements.push(
          <Box
            key={`table-${i}`}
            component="table"
            mb={20}
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              border: '1px solid #dee2e6',
            }}
          >
            <thead>
              <tr>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    style={{
                      padding: '10px',
                      border: '1px solid #dee2e6',
                      backgroundColor: '#f8f9fa',
                      fontWeight: 600,
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      style={{
                        padding: '10px',
                        border: '1px solid #dee2e6',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Box>
        );
      }
    }
    // Regular paragraphs
    else if (line.trim()) {
      elements.push(
        <Text key={`p-${i}`} mb={15} size="md" lineClamp={undefined}>
          {line}
        </Text>
      );
    } else {
      // Empty lines
      elements.push(<Box key={`empty-${i}`} h={10} />);
    }

    i++;
  }

  return <>{elements}</>;
}

/**
 * Blog Post Content Component
 */
export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <PageContainer>
      <Box py={80} mt={50} component="article">
        {/* Semantic H1 for SEO */}
        <h1 style={{ marginBottom: "1rem", fontSize: "2.5rem", fontWeight: 700 }}>
          {post.title}
        </h1>

        {/* Article metadata */}
        <Box mb={40}>
          <Text c="dimmed" size="sm">
            By {post.author} • {post.publishDate} • {post.readTime}
          </Text>
        </Box>

        {/* Article content */}
        <Box component="section" style={{ maxWidth: "800px" }}>
          <MarkdownContent content={post.content} />
        </Box>

        {/* Share and CTA Section */}
        <Box mt={60} pt={40} style={{ borderTop: "1px solid #dee2e6" }}>
          <Text fw={600} mb={15}>
            Ready to start your interior fit-out project?
          </Text>
          <Text mb={20} size="sm" c="dimmed">
            Contact Triple A Interiors for a free consultation on your next project.
          </Text>
        </Box>
      </Box>
    </PageContainer>
  );
}
