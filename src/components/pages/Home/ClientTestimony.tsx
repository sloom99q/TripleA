import { Badge, Container, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import img from '@/assets/imgs/Wood.webp';
import CustomBadge from '@/components/CustomBadge';

export default function ClientTestimony() {
	return (
		// <Container size="lg" p={0} py="xl">

			<Stack align="center" gap="xl">
				<CustomBadge
					variant="light"
					// w={250}
					// // bdrs={'lg'}
					// // size="lg"
					// // px="md"
					// p={'md'}
					// size={'18px'}
					// // py={6}
					// style={{ 
					// 	backgroundColor: '#f7f7f7',
					// 	color: '#5e5e5e',
					// 	fontWeight: 800,
					// 	// fontSize: '40px',
					// 	// borderRadius: '8px'
					// }}
				>
					CLIENT TESTIMONY
				</CustomBadge>
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
				<Image
					src={img}
					alt="Client company logo with wood-textured emblem used in testimonial"
					width={200}
					// height={120}
                    style={{ 
                    	objectFit: 'cover'
                    }}
                />

					{/* <Text size="xl" fw={600} style={{ color: '#000' }}>
						Emaar
					</Text> */}
					<Text mt={10} size="md" fw={700} c="dimmed">
						Projects Director
					</Text>
				</Stack>
			</Stack>
		// </Container>
	);
}
