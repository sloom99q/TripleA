import { Badge, Container, Stack, Text } from '@mantine/core';
import img from '@/assets/imgs/EMAAR.png';

export default function EmaarTestimony() {
	return (
		<Container size="lg" p={0} py="xl">

			<Stack align="center" mb={'10rem'} gap="xl" mt={'10rem'}>
				<Badge
					variant="light"
					// bdrs={'lg'}
					// size="lg"
					// px="md"
					p={'md'}
					size={'18px'}
					// py={6}
					style={{ 
						backgroundColor: '#f7f7f7',
						color: '#5e5e5e',
						fontWeight: 800,
						// fontSize: '40px',
						// borderRadius: '8px'
					}}
				>
					CLIENT TESTIMONY
				</Badge>
	                <Text
	                    fw={800}
	                    size="lg"
	                    ta="center"
	                    maw="90%"
                        mb={'3rem'}
	                    style={{ 
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
