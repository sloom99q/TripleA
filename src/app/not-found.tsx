import type { Metadata } from "next";
import { NotFoundContent } from "./NotFoundContent";

export const metadata: Metadata = {
  title: "Page Not Found | Triple A Interiors",
  description:
    "The page you were looking for could not be found. Explore our interior fit-out services, projects and insights instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
