'use client';

/**
 * Blog Listing Page (Client Component)
 * Location: src/app/blog/page.tsx
 * 
 * Displays all blog posts in a grid layout
 * Supports filtering and sorting via client-side state
 * Uses PageContainer which requires useMediaQuery hook
 * 
 * Note: Marked as client component because:
 * - Uses useState for search and filtering
 * - Imports PageContainer which uses useMediaQuery() hook
 */

import React, { useState } from 'react';
import {
  Box,
  Title,
  Text,
  Card,
  Group,
  Badge,
  SimpleGrid,
  Container,
  Input,
  Button,
  Stack,
} from '@mantine/core';
import { PageContainer } from '@/layout/PageContainer';
import Link from 'next/link';
import '@/css/HeroScroll.globals.css';
import motionStyles from '@/css/HeroScroll.module.css';
import { BlogPostsData } from '@/mockups/BlogPostsData';
import { CTASection } from '@/components/pages/About';

// Extract unique categories
const categories = Array.from(new Set(BlogPostsData.map(post => post.category).filter(Boolean)));

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search and category
  const filteredPosts = BlogPostsData.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Sort by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return (
    <>
      {/* Hero Section */}
      <Box
        style={{
          background: 'linear-gradient(145deg, #1d1d1dff 0%, #212121ff 50%, #232323ff 100%)',
          color: 'white',
          padding: '60px 20px',
          textAlign: 'center',
        }}
      >
      </Box>

      {/* Blog Content */}
      <Container py={60} size="lg">
          {/* Search and Filter Section */}
          <Box mb={50}>
            {/* Search Bar */}
            <Input
              placeholder="Search blog posts..."
              size="md"
              mb={24}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              style={{ maxWidth: '400px' }}
            />

            {/* Category Filter */}
            <Box mb={24}>
              <Text fw={600} mb={10} size="xs">
                Filter by Category:
              </Text>
              <Group gap={8}>
                <Button
                  variant={selectedCategory === null ? 'filled' : 'light'}
                  onClick={() => setSelectedCategory(null)}
                  size="xs"
                >
                  All Posts
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'filled' : 'light'}
                    onClick={() => setSelectedCategory(category || null)}
                    size="xs"
                  >
                    {category}
                  </Button>
                ))}
              </Group>
            </Box>

            {/* Results Count */}
            <Text c="dimmed" size="sm">
              Showing {sortedPosts.length} of {BlogPostsData.length} articles
            </Text>
          </Box>

          {/* Blog Posts Grid */}
          {sortedPosts.length > 0 ? (
            <SimpleGrid cols={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing="md" mb={50}>
              {sortedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                      height: '100%',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    className="hover:shadow-lg"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.12)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Category Badge */}
                    <Group justify="space-between" mb={12}>
                      <Badge color="blue" variant="light">
                        {post.category}
                      </Badge>
                      <Text size="xs" c="dimmed">
                        {post.readTime}
                      </Text>
                    </Group>

                    {/* Title */}
                    <Title order={4} mb={10} lineClamp={2} size="h5">
                      {post.title}
                    </Title>

                    {/* Description */}
                    <Text c="dimmed" size="sm" mb={16} lineClamp={3}>
                      {post.description}
                    </Text>

                    {/* Metadata */}
                    <Group justify="space-between" mt="auto">
                      <Text size="xs" c="dimmed">
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </Text>
                      <Text size="xs" fw={600} c="blue">
                        Read More →
                      </Text>
                    </Group>
                  </Card>
                </Link>
              ))}
            </SimpleGrid>
          ) : (
            <Box py={60} style={{ textAlign: 'center' }}>
              <Text size="lg" c="dimmed">
                No articles found. Try a different search term or category.
              </Text>
            </Box>
          )}

          <CTASection />
      </Container>
    </>
  );
}
