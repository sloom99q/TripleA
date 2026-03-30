"use client";

import { IconBrandWhatsapp } from '@tabler/icons-react';
import styles from './WhatsAppFloatingButton.module.css';

const WHATSAPP_URL =
  'https://wa.me/971585500359?text=Hello%20I%20am%20interested%20in%20your%20services!';

const WhatsAppFloatingButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reach out on WhatsApp"
      className={`${styles.whatsappButton} ${styles.fixed}`}
    >
      <IconBrandWhatsapp size={30} stroke={2.1} className={styles.icon} />
    </a>
  );
};

export default WhatsAppFloatingButton;
