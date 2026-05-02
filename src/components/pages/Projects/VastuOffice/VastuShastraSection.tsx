'use client';

import { Box, Grid, Group, Stack, Text, Title, Modal, Button, SimpleGrid } from '@mantine/core';
import { useMediaQuery, useDisclosure } from '@mantine/hooks';
import { useState, useMemo, useCallback } from 'react';
import {
  IconSun, IconCompass, IconLeaf, IconWind,
  IconArrowRight, IconChevronLeft, IconChevronRight, IconCheck,
} from '@tabler/icons-react';
import CustomBadge from '@/components/CustomBadge';

import img1 from '@/assets/imgs/Vastu-imgs/IMG_1664.JPG.jpeg';
import img2 from '@/assets/imgs/Vastu-imgs/IMG_1665.JPG.jpeg';
import img3 from '@/assets/imgs/Vastu-imgs/IMG_1666.JPG.jpeg';
import img4 from '@/assets/imgs/Vastu-imgs/IMG_1668.JPG.jpeg';
import img5 from '@/assets/imgs/Vastu-imgs/IMG_1670.JPG.jpeg';
import img6 from '@/assets/imgs/Vastu-imgs/IMG_1675.JPG.jpeg';

/* ─── data ──────────────────────────────────────────────────────────── */
const principles = [
  { num: '01', icon: IconSun,     title: 'Energy Flow',           tag: 'Natural & cosmic circulation' },
  { num: '02', icon: IconCompass, title: 'Directional Alignment',  tag: 'Cardinal zone placement' },
  { num: '03', icon: IconLeaf,    title: 'Element Balance',        tag: 'Five elements harmonised' },
  { num: '04', icon: IconWind,    title: 'Natural Integration',    tag: 'Light, air & geometry' },
];

const applicationPoints = [
  'Workspace positioned for optimal natural light and ventilation',
  'Meeting zones placed using cardinal directional principles',
  'Material selection reflecting Vastu balance and harmony',
  'Spatial proportions following mandala geometric design',
  'Entry points aligned for positive directional energy flow',
  'Vertical and horizontal spacing for unobstructed circulation',
];

/* ══════════════════════════════════════════════════════════════════════
   SHAPES (dark panels only)
══════════════════════════════════════════════════════════════════════ */
const ShapesDark = () => (
  <Box aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <Box style={{ position: 'absolute', top: '-14vh', right: '-10vw', width: 'clamp(380px,52vw,780px)', height: 'clamp(380px,52vw,780px)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(110,110,110,0.13) 0%,transparent 62%)', filter: 'blur(65px)' }} />
    <Box style={{ position: 'absolute', bottom: '-10vh', left: '-8vw', width: 'clamp(280px,38vw,580px)', height: 'clamp(280px,38vw,580px)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(65,65,65,0.1) 0%,transparent 65%)', filter: 'blur(50px)' }} />
    {[1,1.45,1.95,2.55].map((s,i) => (
      <Box key={i} style={{ position:'absolute', bottom:'-12vh', left:'-8vw', width:`clamp(${Math.round(150*s)}px,${Math.round(18*s)}vw,${Math.round(300*s)}px)`, height:`clamp(${Math.round(150*s)}px,${Math.round(18*s)}vw,${Math.round(300*s)}px)`, borderRadius:'50%', border:`1px solid rgba(255,255,255,${Math.max(0,0.065-i*0.014)})` }} />
    ))}
    {[1,1.6].map((s,i) => (
      <Box key={i} style={{ position:'absolute', top:'4%', right:'-4vw', width:`clamp(${Math.round(70*s)}px,${Math.round(9*s)}vw,${Math.round(140*s)}px)`, height:`clamp(${Math.round(70*s)}px,${Math.round(9*s)}vw,${Math.round(140*s)}px)`, borderRadius:'50%', border:`1px solid rgba(255,255,255,${0.04-i*0.018})` }} />
    ))}
    <Box style={{ position:'absolute', top:'18%', left:'28%', width:1, height:'clamp(70px,20vh,260px)', background:'linear-gradient(to bottom,transparent,rgba(255,255,255,0.07),transparent)', transform:'rotate(18deg)' }} />
    <Box style={{ position:'absolute', top:'52%', left:'4%', right:'4%', height:1, background:'linear-gradient(to right,transparent,rgba(255,255,255,0.035),transparent)' }} />
    {[...Array(20)].map((_,i) => (
      <Box key={i} style={{ position:'absolute', top:`${10+(i%5)*8}%`, right:`${3+Math.floor(i/5)*5}%`, width:i%3===0?3:2, height:i%3===0?3:2, borderRadius:'50%', backgroundColor:`rgba(255,255,255,${i%4===0?0.11:0.055})` }} />
    ))}
    <Box style={{ position:'absolute', top:'24%', left:'18%', width:7, height:7, border:'1px solid rgba(255,255,255,0.07)', transform:'rotate(45deg)' }} />
    <Box style={{ position:'absolute', bottom:'28%', right:'16%', width:5, height:5, border:'1px solid rgba(255,255,255,0.05)', transform:'rotate(45deg)' }} />
  </Box>
);

/* ══════════════════════════════════════════════════════════════════════
   SHAPES (light panels — dark-coloured, visible on #f7f7f7)
══════════════════════════════════════════════════════════════════════ */
const ShapesLight = () => (
  <Box aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
    <Box style={{ position: 'absolute', top: '-14vh', right: '-10vw', width: 'clamp(380px,52vw,780px)', height: 'clamp(380px,52vw,780px)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,0,0,0.055) 0%,transparent 62%)', filter: 'blur(65px)' }} />
    <Box style={{ position: 'absolute', bottom: '-10vh', left: '-8vw', width: 'clamp(280px,38vw,580px)', height: 'clamp(280px,38vw,580px)', borderRadius: '50%', background: 'radial-gradient(circle,rgba(0,0,0,0.04) 0%,transparent 65%)', filter: 'blur(50px)' }} />
    {[1,1.45,1.95,2.55].map((s,i) => (
      <Box key={i} style={{ position:'absolute', bottom:'-12vh', left:'-8vw', width:`clamp(${Math.round(150*s)}px,${Math.round(18*s)}vw,${Math.round(300*s)}px)`, height:`clamp(${Math.round(150*s)}px,${Math.round(18*s)}vw,${Math.round(300*s)}px)`, borderRadius:'50%', border:`1px solid rgba(0,0,0,${Math.max(0,0.065-i*0.014)})` }} />
    ))}
    {[1,1.6].map((s,i) => (
      <Box key={i} style={{ position:'absolute', top:'4%', right:'-4vw', width:`clamp(${Math.round(70*s)}px,${Math.round(9*s)}vw,${Math.round(140*s)}px)`, height:`clamp(${Math.round(70*s)}px,${Math.round(9*s)}vw,${Math.round(140*s)}px)`, borderRadius:'50%', border:`1px solid rgba(0,0,0,${0.04-i*0.018})` }} />
    ))}
    <Box style={{ position:'absolute', top:'18%', left:'28%', width:1, height:'clamp(70px,20vh,260px)', background:'linear-gradient(to bottom,transparent,rgba(0,0,0,0.07),transparent)', transform:'rotate(18deg)' }} />
    <Box style={{ position:'absolute', top:'52%', left:'4%', right:'4%', height:1, background:'linear-gradient(to right,transparent,rgba(0,0,0,0.035),transparent)' }} />
    {[...Array(20)].map((_,i) => (
      <Box key={i} style={{ position:'absolute', top:`${10+(i%5)*8}%`, right:`${3+Math.floor(i/5)*5}%`, width:i%3===0?3:2, height:i%3===0?3:2, borderRadius:'50%', backgroundColor:`rgba(0,0,0,${i%4===0?0.11:0.055})` }} />
    ))}
    <Box style={{ position:'absolute', top:'24%', left:'18%', width:7, height:7, border:'1px solid rgba(0,0,0,0.07)', transform:'rotate(45deg)' }} />
    <Box style={{ position:'absolute', bottom:'28%', right:'16%', width:5, height:5, border:'1px solid rgba(0,0,0,0.05)', transform:'rotate(45deg)' }} />
  </Box>
);

/* ══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════ */
export default function VastuShastraSection() {
  const isMobile = useMediaQuery('(max-width: 991px)');
  const isTablet = useMediaQuery('(max-width: 1100px)');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [btnHover, setBtnHover]           = useState(false);
  const [opened, { open, close }]         = useDisclosure(false);

  const images = useMemo(() => [
    { src: img1.src, alt: 'Vastu Office — Entrance Alignment' },
    { src: img2.src, alt: 'Vastu Office — Workstation Layout' },
    { src: img3.src, alt: 'Vastu Office — Natural Light' },
    { src: img4.src, alt: 'Vastu Office — Material Selection' },
    { src: img5.src, alt: 'Vastu Office — Meeting Zone' },
    { src: img6.src, alt: 'Vastu Office — Energy Corridors' },
  ], []);

  const hPad = isMobile ? 24 : isTablet ? 44 : 72;
  const vPad = isMobile ? '6vh' : '10vh';

  const handleOpen = useCallback((i: number) => { setSelectedIndex(i); open(); }, [open]);
  const handlePrev = useCallback(() => setSelectedIndex(p => p !== null ? (p - 1 + images.length) % images.length : 0), [images.length]);
  const handleNext = useCallback(() => setSelectedIndex(p => p !== null ? (p + 1) % images.length : 0), [images.length]);

  /* Shared dark left panel */
  const LeftPanel = ({ badge, title, sub, children }: {
    badge: string; title: React.ReactNode; sub?: string; children?: React.ReactNode;
  }) => (
    <Grid.Col span={{ base: 12, md: 4 }} style={{ padding: 0, position: 'relative', overflow: 'hidden', minHeight: isMobile ? 'auto' : '56vh' }}>
      <Box style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,#080808 0%,#0e0e0e 60%,#090909 100%)' }}>
        <ShapesDark />
      </Box>
      <Box style={{ position: 'relative', zIndex: 1, paddingLeft: isMobile ? hPad * 0.75 : hPad * 0.75, paddingRight: isMobile ? hPad * 0.75 : hPad * 0.55, paddingTop: vPad, paddingBottom: vPad, height: '100%', display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'center' : 'flex-start' }}>
        <Stack gap="lg" align={isMobile ? 'center' : 'flex-start'} style={{ textAlign: isMobile ? 'center' : 'left', width: '100%' }}>
          <CustomBadge bg="white" c="black">{badge}</CustomBadge>
          <Title order={2} fw={600} c="white" style={{ lineHeight: 1.05, letterSpacing: '-0.8px', fontSize: 'clamp(1.8rem,4vw,3rem)' }}>
            {title}
          </Title>
          {sub && (
            <Group gap={10} justify={isMobile ? 'center' : 'flex-start'}>
              <Box style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.18)' }} />
              <Text size="sm" fw={500} tt="uppercase" style={{ letterSpacing: '1.8px', color: 'rgba(255,255,255,0.22)' }}>
                {sub}
              </Text>
            </Group>
          )}
          {children}
        </Stack>
      </Box>
    </Grid.Col>
  );

  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          S1 — FREE-FLOATING HEADLINE (no wrapper, no background)
      ════════════════════════════════════════════════════════════ */}
      <Box
        mx={isMobile ? 12 : 25}
        mb={isMobile ? 0 : 0}
        style={{ position: 'relative', paddingTop: isMobile ? '7vh' : '10vh', paddingBottom: isMobile ? '6vh' : '9vh', paddingLeft: hPad, paddingRight: hPad }}
      >
        {/* decorative rings — top right */}
        {[1, 1.6, 2.3].map((s, i) => (
          <Box key={i} aria-hidden style={{ position: 'absolute', top: '-6vh', right: '-3vw', width: `clamp(${Math.round(100*s)}px,${Math.round(12*s)}vw,${Math.round(220*s)}px)`, height: `clamp(${Math.round(100*s)}px,${Math.round(12*s)}vw,${Math.round(220*s)}px)`, borderRadius: '50%', border: `1px solid rgba(0,0,0,${Math.max(0, 0.05 - i * 0.014)})`, pointerEvents: 'none' }} />
        ))}
        {/* faint dot grid — bottom left */}
        {[...Array(12)].map((_, i) => (
          <Box key={i} aria-hidden style={{ position: 'absolute', bottom: `${10 + (i % 3) * 9}%`, left: `${5 + Math.floor(i / 3) * 6}%`, width: 2.5, height: 2.5, borderRadius: '50%', backgroundColor: `rgba(0,0,0,${i % 3 === 0 ? 0.065 : 0.03})`, pointerEvents: 'none' }} />
        ))}

        <Stack align="center" gap={0} style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
          <CustomBadge mb="xl">Design Philosophy</CustomBadge>

          <Title
            order={1} fw={700}
            style={{ fontSize: 'clamp(3rem,9vw,7rem)', lineHeight: 0.96, letterSpacing: '-3px', color: '#0a0a0a', marginBottom: isMobile ? 28 : 40 }}
          >
            Vastu{' '}
            <Box component="span" style={{ color: 'transparent', WebkitTextStroke: '2px rgba(0,0,0,0.18)' }}>
              Shastra
            </Box>
          </Title>

          <Box style={{ width: isMobile ? 44 : 64, height: 1, background: 'rgba(0,0,0,0.14)', marginBottom: isMobile ? 22 : 34 }} />

          <Text size="md" style={{ lineHeight: 1.95, color: 'rgba(0,0,0,0.42)', maxWidth: 540 }}>
            An ancient Indian science of architecture — Vastu Shastra aligns built
            spaces with natural forces: sunlight, wind, earth energy, and geometric
            harmony. Every corner, corridor, and workstation was deliberately
            positioned to support productivity, wellbeing, and positive energy flow.
          </Text>

          <Group gap={8} mt={isMobile ? 26 : 38} justify="center">
            <Box style={{ width: 5, height: 5, borderRadius: '50%', background: '#0a0a0a', opacity: 0.2 }} />
            <Text size="sm" fw={500} tt="uppercase" style={{ letterSpacing: '2.4px', color: 'rgba(0,0,0,0.28)', fontSize: '0.68rem' }}>
              Office Fit-Out&nbsp;&nbsp;·&nbsp;&nbsp;UAE
            </Text>
            <Box style={{ width: 5, height: 5, borderRadius: '50%', background: '#0a0a0a', opacity: 0.2 }} />
          </Group>
        </Stack>
      </Box>

      {/* ════════════════════════════════════════════════════════════
          WRAPPER — S2 → S4 (gets the border radius + container)
      ════════════════════════════════════════════════════════════ */}
      <Box
        mx={isMobile ? 12 : 25}
        mb={isMobile ? 12 : 25}
        style={{ borderRadius: isMobile ? 32 : 52, overflow: 'hidden', position: 'relative', border: '1px solid rgba(0,0,0,0.07)', background: '#f7f7f7' }}
      >

        {/* ════════════════════════════════════════════════════════════
            S2 — LEFT DARK + RIGHT DARK + ShapesDark: 4 principle cards
        ════════════════════════════════════════════════════════════ */}
        <Grid style={{ width: '100%', margin: 0 }} gutter={0} align="stretch">
          <LeftPanel
            badge="Principles"
            title={<>Four Core<br />Principles</>}
            sub="Science & Space"
          />

          <Grid.Col span={{ base: 12, md: 8 }} style={{ padding: 0, background: '#f7f7f7', position: 'relative' }}>
            <ShapesLight />
            <Box style={{ position: 'relative', zIndex: 1, paddingLeft: isMobile ? hPad * 0.75 : hPad * 0.7, paddingRight: isMobile ? hPad * 0.75 : hPad, paddingTop: vPad, paddingBottom: vPad }}>
              <SimpleGrid cols={isMobile ? 1 : 2} spacing={isMobile ? 12 : 18}>
                {principles.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <Box
                      key={i}
                      style={{
                        padding: isMobile ? '20px 18px' : '24px 22px',
                        borderRadius: 18,
                        border: '1px solid rgba(255,255,255,0.07)',
                        background: 'linear-gradient(135deg,#111 0%,#0d0d0d 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 14,
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      {/* stroke-only number watermark */}
                      <Text aria-hidden style={{ position: 'absolute', top: -4, right: 12, fontSize: 'clamp(2.8rem,5vw,4.2rem)', fontWeight: 800, color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.28)', lineHeight: 1, letterSpacing: '-3px', fontFamily: 'Raleway,sans-serif', userSelect: 'none' }}>
                        {p.num}
                      </Text>

                      {/* icon chip */}
                      <Box style={{ width: 42, height: 42, borderRadius: 12, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={18} stroke={1.6} style={{ color: 'rgba(255,255,255,0.75)' }} />
                      </Box>

                      <Box>
                        <Text fw={700} style={{ fontSize: 'clamp(0.88rem,1.8vw,1.05rem)', color: 'rgba(255,255,255,0.88)', lineHeight: 1.2, letterSpacing: '-0.2px' }}>
                          {p.title}
                        </Text>
                        <Text size="sm" mt={5} style={{ color: 'rgba(255,255,255,0.35)', lineHeight: 1.5 }}>
                          {p.tag}
                        </Text>
                      </Box>

                      {/* bottom accent */}
                      <Box style={{ position: 'absolute', bottom: 0, left: 22, right: 22, height: 1, background: 'rgba(255,255,255,0.07)' }} />
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>
          </Grid.Col>
        </Grid>

        {/* ════════════════════════════════════════════════════════════
            S3 — LEFT DARK + RIGHT LIGHT: gallery with padded images
        ════════════════════════════════════════════════════════════ */}
        <Box style={{ height: 1, background: 'rgba(0,0,0,0.08)' }} />
        <Grid style={{ width: '100%', margin: 0 }} gutter={0} align="stretch">
          <LeftPanel
            badge="Gallery"
            title={<>Principles<br />in Practice</>}
            sub="Click to expand"
          />

          <Grid.Col span={{ base: 12, md: 8 }} style={{ padding: 0, background: '#f7f7f7', position: 'relative' }}>
            <Box style={{ padding: `${isMobile ? hPad * 0.75 : hPad * 0.8}px ${isMobile ? hPad * 0.75 : hPad}px` }}>
              {/* single dark container for all images */}
              <Box style={{ background: '#111', borderRadius: isMobile ? 20 : 26, padding: isMobile ? 14 : 20, border: '1px solid rgba(255,255,255,0.06)' }}>
                <Grid gutter={isMobile ? 8 : 12}>
                  {images.map((img, i) => (
                    <Grid.Col key={i} span={{ base: 6, sm: 4 }}>
                      <Box
                        onClick={() => handleOpen(i)}
                        style={{ cursor: 'pointer', borderRadius: isMobile ? 10 : 14, overflow: 'hidden', aspectRatio: '4 / 3', backgroundColor: '#222', transition: 'transform 0.25s ease, opacity 0.25s ease' }}
                        onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1.03)'; el.style.opacity = '0.9'; }}
                        onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'scale(1)'; el.style.opacity = '1'; }}
                      >
                        <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                      </Box>
                    </Grid.Col>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid.Col>
        </Grid>

        {/* ════════════════════════════════════════════════════════════
            S4 — LEFT DARK + RIGHT LIGHT: checklist + CTA
        ════════════════════════════════════════════════════════════ */}
        <Box style={{ height: 1, background: 'rgba(0,0,0,0.08)' }} />
        <Grid style={{ width: '100%', margin: 0 }} gutter={0} align="stretch">
          <LeftPanel
            badge="Application"
            title={<>Applied to<br />This Office</>}
            sub="Intentional by design"
          >
            <Box
              component="a"
              href="/contact"
              onMouseEnter={() => setBtnHover(true)}
              onMouseLeave={() => setBtnHover(false)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 4, alignSelf: isMobile ? 'center' : 'flex-start',
                padding: isMobile ? '10px 18px' : '12px 24px', borderRadius: 10,
                border: btnHover ? '1px solid rgba(255,255,255,0.6)' : '1px solid rgba(255,255,255,0.14)',
                backgroundColor: btnHover ? 'rgba(255,255,255,0.06)' : 'transparent',
                boxShadow: btnHover ? '0 0 22px rgba(255,255,255,0.16),0 0 52px rgba(255,255,255,0.06)' : 'none',
                color: btnHover ? '#fff' : 'rgba(255,255,255,0.54)',
                textDecoration: 'none', fontFamily: 'Raleway,sans-serif', fontWeight: 600,
                fontSize: 'clamp(0.76rem,1.3vw,0.9rem)', letterSpacing: '0.3px',
                transition: 'all 0.3s ease', transform: btnHover ? 'translateY(-2px)' : 'translateY(0)',
                cursor: 'pointer', whiteSpace: 'nowrap',
              }}
            >
              Discuss Your Project
              <IconArrowRight size={13} style={{ transform: btnHover ? 'translateX(4px)' : 'translateX(0)', transition: 'transform 0.3s ease' }} />
            </Box>
          </LeftPanel>

          <Grid.Col span={{ base: 12, md: 8 }} style={{ padding: 0, background: '#f7f7f7', position: 'relative' }}>
            <ShapesLight />
            <Box style={{ position: 'relative', zIndex: 1, paddingLeft: isMobile ? hPad * 0.75 : hPad * 0.7, paddingRight: isMobile ? hPad * 0.75 : hPad, paddingTop: isMobile ? '5vh' : vPad, paddingBottom: isMobile ? '5vh' : vPad }}>
              <Stack gap={isMobile ? 10 : 12}>
                {applicationPoints.map((point, i) => (
                  <Box
                    key={i}
                    style={{
                      display: 'flex', alignItems: 'flex-start', gap: isMobile ? 14 : 16,
                      padding: isMobile ? '14px 16px' : '16px 20px',
                      background: i % 2 === 0 ? 'linear-gradient(135deg,#111 0%,#0d0d0d 100%)' : 'linear-gradient(135deg,#0f0f0f 0%,#0a0a0a 100%)',
                      borderRadius: 14,
                      border: '1px solid rgba(255,255,255,0.065)',
                    }}
                  >
                    <Box style={{ width: 26, height: 26, minWidth: 26, backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1, flexShrink: 0 }}>
                      <IconCheck size={11} stroke={2.8} style={{ color: 'rgba(255,255,255,0.85)' }} />
                    </Box>
                    <Text size="md" fw={500} style={{ color: 'rgba(255,255,255,0.62)', lineHeight: 1.6 }}>
                      {point}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid.Col>
        </Grid>

      </Box>

      {/* ════════════════════════════════════════════════════════════════
          LIGHTBOX
      ════════════════════════════════════════════════════════════════ */}
      <Modal
        opened={opened} onClose={close} centered withCloseButton size="xl"
        styles={{ content: { backgroundColor: '#0a0a0a', borderRadius: 24 }, header: { backgroundColor: '#0a0a0a', paddingBottom: 0 }, close: { color: '#fff' }, body: { padding: '12px 24px 24px' } }}
      >
        {selectedIndex !== null && (
          <Stack gap="md" align="center">
            <Box style={{ width: '100%', borderRadius: 16, overflow: 'hidden', maxHeight: '55vh' }}>
              <img src={images[selectedIndex].src} alt={images[selectedIndex].alt} style={{ width: '100%', maxHeight: '55vh', objectFit: 'contain', display: 'block' }} />
            </Box>
            <Text size="sm" ta="center" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {images[selectedIndex].alt}
            </Text>
            <Group gap="lg">
              <Button variant="subtle" onClick={handlePrev} leftSection={<IconChevronLeft size={16} />} style={{ color: '#fff' }}>Prev</Button>
              <Text size="sm" style={{ color: 'rgba(255,255,255,0.25)' }}>{selectedIndex + 1} / {images.length}</Text>
              <Button variant="subtle" onClick={handleNext} rightSection={<IconChevronRight size={16} />} style={{ color: '#fff' }}>Next</Button>
            </Group>
          </Stack>
        )}
      </Modal>
    </>
  );
}
