import { Box, Image } from "@mantine/core";
// @ts-ignore
import onlyLogoBlack from "@/assets/imgs/onlyLogoBlack.webp";

export default function CustomDivider() {
    return (
        <Box py={80} w={'100%'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
            <Box style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5), transparent)' }} />
               <Image src={onlyLogoBlack} alt="Logo" w={'auto'} h={40} style={{ opacity: 0.7 }} />
            <Box style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.5), transparent)' }} />
        </Box>
    );
}