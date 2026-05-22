'use client';

import { Box } from "@mantine/core";

export default function MapComponent() {
  return (
    <Box
      component="iframe"
      src="https://maps.google.com/maps?q=Arkan%20Business%20Center%20Fronds%20Building%20Al%20Garhoud%20Dubai&z=17&output=embed"
      w="100%"
      h={350}
      style={{ border: 0, borderRadius: 16 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Triple A Interiors - Arkan Business Center, Al Garhoud, Dubai"
    />
  );
}