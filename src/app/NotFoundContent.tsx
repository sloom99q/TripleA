'use client';

import { Box, Button, Text, Title, Stack } from '@mantine/core';
import Link from 'next/link';
import styles from './not-found.module.css';

export function NotFoundContent() {
   return (
    <Box className={styles.container}>
      {/* Animated background elements */}
      <div className={styles.orb + ' ' + styles.orb1}></div>
      <div className={styles.orb + ' ' + styles.orb2}></div>

      <div className={styles.content}>
        {/* 404 Number with animation */}
        <div className={styles.numberWrapper}>
          <div className={styles.notFoundNumber}>
            <span className={styles.digit}>4</span>
            <span className={styles.digit}>0</span>
            <span className={styles.digit}>4</span>
          </div>
        </div>

        {/* Heading */}
        <Title order={1} className={styles.title}>
          Page Not Found
        </Title>

        {/* Description */}
        <Text className={styles.description}>
          Oops! The page you're looking for doesn't exist or has been moved.
        </Text>

        {/* Action Buttons */}
        <Stack gap="sm" className={styles.buttonGroup}>
          <Link href="/" className={styles.linkWrapper}>
            <Button fullWidth className={styles.primaryBtn}>
              Back to Home
            </Button>
          </Link>
          <Button 
            fullWidth
            variant="default" 
            className={styles.secondaryBtn}
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </Stack>
      </div>
    </Box>
  );
}
