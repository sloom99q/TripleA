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
        <Title key={`h2-${i}`} order={2} mt={24} mb={12} size="h4">
          {line.replace('## ', '')}
        </Title>
      );
    } else if (line.startsWith('### ')) {
      elements.push(
        <Title key={`h3-${i}`} order={3} mt={18} mb={10} size="h5">
          {line.replace('### ', '')}
        </Title>
      );
    } else if (line.startsWith('#### ')) {
      elements.push(
        <Title key={`h4-${i}`} order={4} mt={12} mb={8} size="h6">
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
        <Box key={`list-${i}`} component="ul" ml={20} mb={12}>
          {listItems.map((item, idx) => (
            <Text key={idx} component="li" mb={4} size="sm">
              {item}
            </Text>
          ))}
        </Box>
      );
    }
    // Bold text pattern
    else if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
      elements.push(
        <Text key={`bold-${i}`} fw={600} mb={8} size="sm">
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
        <Text key={`p-${i}`} mb={12} size="sm" lineClamp={undefined} style={{ lineHeight: 1.6 }}>
          {line}
        </Text>
      );
    } else {
      // Empty lines
      elements.push(<Box key={`empty-${i}`} h={6} />);
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
      <Box py={60} mt={150} component="article">
        {/* Semantic H1 for SEO */}
        <h1 style={{ marginBottom: "1.2rem", fontSize: "2rem", fontWeight: 700, lineHeight: 1.3 }}>
          {post.title}
        </h1>

        {/* Article metadata */}
        <Box mb={30}>
          <Text c="dimmed" size="sm">
            By {post.author} • {post.publishDate} • {post.readTime}
          </Text>
        </Box>

        {/* Article content */}
        <Box component="section" style={{ maxWidth: "750px" }}>
          <MarkdownContent content={post.content} />
        </Box>

        {/* Share and CTA Section */}
        <Box mt={50} pt={30} style={{ borderTop: "1px solid #dee2e6" }}>
          <Text fw={600} mb={12} size="sm">
            Ready to start your interior fit-out project?
          </Text>
          <Text mb={16} size="sm" c="dimmed">
            Contact Triple A Interiors for a free consultation on your next project.
          </Text>
        </Box>
      </Box>
    </PageContainer>
  );
}
