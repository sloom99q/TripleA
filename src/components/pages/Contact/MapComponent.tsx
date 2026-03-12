import { Box } from "@mantine/core";

export default function MapComponent() {
  return (
    <Box
      component="iframe"
      src="https://maps.google.com/maps?q=Westburry%20Residence%20Dubai&z=18&output=embed"
      w="100%"
      h={350}
      style={{ border: 0, borderRadius: 16 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Westburry Tower1, Business Bay Dubai"
    />
  );
}