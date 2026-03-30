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

// Import blog posts
const blogPosts = [
  {
    slug: "complete-guide-interior-fit-out-dubai",
    title: "Complete Guide to Interior Fit-Out in Dubai: Process, Timeline & Costs",
    description: "Everything you need to know about interior fit-out projects in Dubai, from planning to completion.",
    category: "Fit-Out",
    author: "Triple A Interiors",
    publishDate: "2025-03-01",
    readTime: "8 min read",
    published: true,
  },
  {
    slug: "mep-contracting-complete-overview",
    title: "MEP Contracting Explained: Mechanical, Electrical & Plumbing Systems",
    description: "In-depth guide to MEP contracting, the essential infrastructure behind every building.",
    category: "MEP",
    author: "Triple A Interiors",
    publishDate: "2025-02-28",
    readTime: "7 min read",
    published: false,
  },
  {
    slug: "interior-design-trends-2025",
    title: "Interior Design Trends 2025: What's New and Timeless",
    description: "Stay ahead of design trends with our guide to modern interior design styles for 2025.",
    category: "Design Trends",
    author: "Triple A Interiors",
    publishDate: "2025-02-25",
    readTime: "6 min read",
    published: false,
  },
  {
    slug: "renovation-costs-budgeting-guide",
    title: "Renovation Costs 2025: Budgeting Guide for Your Interior Project",
    description: "Complete breakdown of renovation costs and how to budget effectively for interior projects.",
    category: "Budget & Planning",
    author: "Triple A Interiors",
    publishDate: "2025-02-22",
    readTime: "8 min read",
    published: false,
  },
  {
    slug: "wall-finishes-cladding-options-guide",
    title: "Wall Finishes & Cladding: Complete Guide to Modern Options",
    description: "Explore wall finishes and cladding options for your interior design project.",
    category: "Materials",
    author: "Triple A Interiors",
    publishDate: "2025-02-20",
    readTime: "7 min read",
    published: false,
  },
  {
    slug: "flooring-solutions-comparison",
    title: "Complete Guide to Flooring Solutions for Every Space",
    description: "Explore flooring options including tiles, wood, vinyl, and epoxy for your interior project.",
    category: "Materials",
    author: "Triple A Interiors",
    publishDate: "2025-02-18",
    readTime: "8 min read",
    published: false,
  },
  {
    slug: "ceiling-design-acoustic-solutions",
    title: "Ceiling Design & Acoustic Solutions for Modern Interiors",
    description: "Explore false ceiling options, acoustic treatments, and ceiling design trends.",
    category: "Design",
    author: "Triple A Interiors",
    publishDate: "2025-02-15",
    readTime: "7 min read",
    published: false,
  },
  {
    slug: "authority-approvals-dubai-fit-out",
    title: "Navigate Authority Approvals for Interior Fit-Out in Dubai",
    description: "Complete guide to Dubai Municipality, DEWA, and other approvals needed for fit-out projects.",
    category: "Regulations",
    author: "Triple A Interiors",
    publishDate: "2025-02-12",
    readTime: "8 min read",
    published: false,
  },
];

// Extract unique categories
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on search, category, and published status
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const isPublished = post.published === true;
    return matchesSearch && matchesCategory && isPublished;
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
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <Container>
          <Title order={1} size="h1" mb={20} className={motionStyles.scrollFloatMedium}>
            Interior Design & Construction Blog
          </Title>
          <Text size="lg" mb={10} style={{ maxWidth: '600px', margin: '0 auto' }} className={motionStyles.scrollFloatSmall}>
            Expert insights on interior fit-out, design trends, materials, and Dubai construction regulations
          </Text>
        </Container>
      </Box>

      {/* Blog Content */}
      <Container py={80} size="lg">
          {/* Search and Filter Section */}
          <Box mb={60}>
            {/* Search Bar */}
            <Input
              placeholder="Search blog posts..."
              size="lg"
              mb={30}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.currentTarget.value)}
              style={{ maxWidth: '400px' }}
            />

            {/* Category Filter */}
            <Box mb={30}>
              <Text fw={600} mb={12} size="sm">
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
                    onClick={() => setSelectedCategory(category)}
                    size="xs"
                  >
                    {category}
                  </Button>
                ))}
              </Group>
            </Box>

            {/* Results Count */}
            <Text c="dimmed" size="sm">
              Showing {sortedPosts.length} of {blogPosts.length} articles
            </Text>
          </Box>

          {/* Blog Posts Grid */}
          {sortedPosts.length > 0 ? (
            <SimpleGrid cols={{ base: 1, sm: 1, md: 2, lg: 2 }} spacing="lg" mb={60}>
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
                    <Title order={3} mb={12} lineClamp={2}>
                      {post.title}
                    </Title>

                    {/* Description */}
                    <Text c="dimmed" size="sm" mb={20} lineClamp={3}>
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

          {/* CTA Section */}
          <Box
            mt={80}
            pt={60}
            style={{
              borderTop: '1px solid #dee2e6',
              textAlign: 'center',
            }}
          >
            <Title order={2} mb={20}>
              Ready to Transform Your Space?
            </Title>
            <Text mb={30} size="lg" c="dimmed" style={{ maxWidth: '600px', margin: '0 auto 30px' }}>
              Our expert team at Triple A Interiors is here to turn your vision into reality.
              Contact us today for a free consultation on your next interior fit-out project.
            </Text>
            <Link href="/contact">
              <Button size="lg" color="blue">
                Start Your Project
              </Button>
            </Link>
          </Box>
      </Container>
    </>
  );
}
