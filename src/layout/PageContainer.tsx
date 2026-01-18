import { Container } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function PageContainer({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery('(max-width: 762px)');

  return (
    <Container 
      size="100%"
      px={isMobile ? 25 : 100}
      m="0 auto"
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      {children}
    </Container>
  );
}

export function FullPageContainer({ children }: { children: React.ReactNode }) {
  return (
    <Container 
    size="100%"
    // py="xl"
    // px={{ base: 'lg', md: 'sm' }}
    px={'25px'}
    m="0 auto"
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
    >
      {children}
    </Container>
  );
}