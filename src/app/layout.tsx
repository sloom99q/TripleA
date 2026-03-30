import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import theme from "@/theme";
import "@/index.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import WhatsAppFloatingButton from "@/components/common/WhatsAppFloatingButton";
import { Analytics } from "@vercel/analytics/next";

/**
 * Root Layout for Next.js App Router
 * 
 * This layout:
 * - Wraps the entire application with MantineProvider for Mantine UI
 * - Includes the global Navbar component
 * - Includes the global Footer component
 * - Applies global styles
 * - Sets up the HTML/body structure
 */

export const metadata: Metadata = {
  title: "Triple A Interiors | Premium Interior Fit-Out Company in Dubai",
  description:
    "Transform your space with Triple A Interiors - Dubai's leading interior fit-out company specializing in commercial and residential design.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags can be added here */}
      </head>
      <body>
        <SmoothScrollProvider>
          <MantineProvider theme={theme}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <WhatsAppFloatingButton />
          </MantineProvider>
        </SmoothScrollProvider>
        <Analytics />
      </body>
    </html>
  );
}
