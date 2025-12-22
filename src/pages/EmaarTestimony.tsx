import { Container, Stack, Text } from '@mantine/core';
import img from '../assets/imgs/EMAAR.png';

export default function EmaarTestimony() {
	return (
		<Container size="lg" p={0} py="xl">
			<Stack align="center" mb={'6rem'} gap="xl">
	                <Text
	                    fw={700}
	                    size="clamp(2rem, 6vw, 4rem)"
	                    ta="center"
	                    maw="90%"
                        mb={'3rem'}
	                    style={{ 
	                    	marginTop: '10rem',
	                    	lineHeight: 1.1,
	                    	color: '#000'
	                    }}
	                >
	                    Triple A transformed our vision into a stunning reality. Highly recommend!
	                </Text>

                    <Stack gap={4} align="center">
                <img
                    src={img}
                    alt="Emaar Logo"
                    style={{ 
                    	width: '200px', 
                    	// height: '120px', 
                    	// borderRadius: '50%',
                    	objectFit: 'cover'
                    }}
                />

					{/* <Text size="xl" fw={600} style={{ color: '#000' }}>
						Emaar
					</Text> */}
					<Text size="md" c="dimmed">
						CEO Build
					</Text>
				</Stack>
			</Stack>
		</Container>
	);
}
