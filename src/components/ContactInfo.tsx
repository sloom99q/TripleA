import { useState } from 'react';
import { Container, Group, Text, Box, Stack, Button, TextInput, Select, Textarea, Grid, Anchor } from '@mantine/core';
import { IconPhone, IconMail, IconMapPin, IconBrandInstagram, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';

// Contact Info Component
export default function ContactInfo() {
  return (
    <Stack gap="xl" style={{ flex: 1 }}>
      <Group gap="md">
        <Box bg="black" p="md" style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', minWidth: '48px' }}>
          <IconPhone size={24} color="white" />
        </Box>
        <Stack gap={0}>
          <Text fw={600} size="sm" c="dimmed">Phone</Text>
          <Text fw={700} ff={'sans-serif'} size="sm">+971 58 550 0359</Text>
        </Stack>
      </Group>

      <Group gap="md">
        <Box bg="black" p="md" style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', minWidth: '48px' }}>
          <IconMail size={24} color="white" />
        </Box>
        <Stack gap={0}>
          <Text fw={600} size="sm" c="dimmed">E-Mail</Text>
          <Text fw={700} size="sm">info@triple-a.ae</Text>
        </Stack>
      </Group>

      <Group gap="md">
        <Box bg="black" p="md" style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', minWidth: '48px' }}>
          <IconMapPin size={24} color="white" />
        </Box>
        <Stack gap={0}>
          <Text fw={600} size="sm" c="dimmed">Location</Text>
            <Text fw={700} size="sm">
            Dubai, The Opus by Omniyat,{' '}
            <span style={{ fontFamily: 'sans-serif' }}>804</span>B
            </Text>
        </Stack>
      </Group>
    </Stack>
  );
}

// // Social Media Component
// function SocialMedia() {
//   const socials = [
//     { icon: IconBrandInstagram, url: 'https://instagram.com', label: 'Instagram' },
//     { icon: IconBrandX, url: 'https://twitter.com', label: 'Twitter' },
//     { icon: IconBrandLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' }
//   ];

//   return (
//     <Stack gap="md" mt="xl" pt="xl" style={{ borderTop: '1px solid #e9ecef' }}>
//       <Text fw={600} size="sm" c="dimmed">Social Media</Text>
//       <Group gap="md">
//         {socials.map((social) => {
//           const Icon = social.icon;
//           return (
//             <Box 
//               key={social.label}
//               component="a"
//               href={social.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               bg="black" 
//               p="md" 
//               style={{ borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', cursor: 'pointer' }}
//             >
//               <Icon size={24} color="white" />
//             </Box>
//           );
//         })}
//       </Group>
//     </Stack>
//   );
// }

// // Contact Form Component
// function ContactForm() {
//   const [formData, setFormData] = useState({
//     subject: 'Buy property',
//     name: '',
//     phone: '',
//     email: '',
//     message: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: '' }));
//     }
//   };

//   const handleSubmit = () => {
//     const newErrors = {};
//     if (!formData.name) newErrors.name = 'Name is required';
//     if (!formData.phone) newErrors.phone = 'Phone is required';
//     if (!formData.email) newErrors.email = 'Email is required';
//     if (!formData.message) newErrors.message = 'Message is required';

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     console.log('Form submitted:', formData);
//     setFormData({ subject: 'Buy property', name: '', phone: '', email: '', message: '' });
//     setErrors({});
//     alert('Thank you! We will contact you soon.');
//   };

//   return (
//     <Stack gap="lg">
//       <Select
//         label="Subject *"
//         placeholder="Select subject"
//         value={formData.subject}
//         onChange={(value) => handleChange('subject', value)}
//         data={['Buy property', 'Sell property', 'Rent property', 'Inquiry']}
//         searchable
//         styles={{
//           input: {
//             borderColor: '#dee2e6',
//             padding: '12px 16px',
//             fontSize: '14px'
//           }
//         }}
//       />

//       <TextInput
//         label="Name *"
//         placeholder="Wisnu Kencana"
//         value={formData.name}
//         onChange={(e) => handleChange('name', e.currentTarget.value)}
//         error={errors.name}
//         styles={{
//           input: {
//             borderColor: '#dee2e6',
//             padding: '12px 16px',
//             fontSize: '14px'
//           }
//         }}
//       />

//       <TextInput
//         label="Phone Number *"
//         placeholder="+62934834390"
//         value={formData.phone}
//         onChange={(e) => handleChange('phone', e.currentTarget.value)}
//         error={errors.phone}
//         styles={{
//           input: {
//             borderColor: '#dee2e6',
//             padding: '12px 16px',
//             fontSize: '14px'
//           }
//         }}
//       />

//       <TextInput
//         label="Email address"
//         placeholder="wisnu@mail.com"
//         value={formData.email}
//         onChange={(e) => handleChange('email', e.currentTarget.value)}
//         error={errors.email}
//         styles={{
//           input: {
//             borderColor: '#dee2e6',
//             padding: '12px 16px',
//             fontSize: '14px'
//           }
//         }}
//       />

//       <Textarea
//         label="Message *"
//         placeholder="Your message"
//         value={formData.message}
//         onChange={(e) => handleChange('message', e.currentTarget.value)}
//         error={errors.message}
//         minRows={4}
//         styles={{
//           input: {
//             borderColor: '#dee2e6',
//             padding: '12px 16px',
//             fontSize: '14px'
//           }
//         }}
//       />

//       <Button
//         onClick={handleSubmit}
//         fullWidth
//         bg="black"
//         size="lg"
//         fw={700}
//         style={{ borderRadius: '6px' }}
//       >
//         Submit
//       </Button>
//     </Stack>
//   );
// }

// // Map Component (Embed Google Maps for Bali)
// function MapComponent() {
//   return (
//     <Box
//       component="iframe"
//       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.3738937666307!2d115.1959!3d-8.6705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd247563cfe0001%3A0x1234567890abcdef!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890"
//       width="100%"
//       height={400}
//       style={{ border: 'none', borderRadius: '8px', marginBottom: '20px' }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     />
//   );
// }

// // Hero Section Component
// function HeroContact() {
//   return (
//     <Box
//       style={{
//         backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '500px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: 'white',
//         textAlign: 'center'
//       }}
//     >
//       <Stack gap="md">
//         {/* <Text size="xl" fw={700}>Triple A.</Text> */}
//         <Text size="xl" fw={700} style={{ lineHeight: 1.2 }}>Your Fit-Out vision Is <br /> Within Reach</Text>
//         <Text size="lg" c="rgba(255,255,255,0.9)">Start the conversation and take the first step.</Text>
//       </Stack>
//     </Box>
//   );
// }

// // Main App
// export default function TropicaApp() {
//   return (
//     <Box>

//       {/* Hero Section */}
//       <HeroSection />

//       {/* Main Content */}
//       <Container size="lg" py="xl">
//         <Grid gutter="xl">
//           {/* Left Side - Contact Info & Socials */}
//           <Grid.Col span={{ base: 12, md: 4 }}>
//             <Box py="xl">
//               <ContactInfo />
//               <SocialMedia />
//             </Box>
//           </Grid.Col>

//           {/* Right Side - Map & Form */}
//           <Grid.Col span={{ base: 12, md: 8 }}>
//             <Stack gap="xl" py="xl">
//               <MapComponent />
//               <ContactForm />
//             </Stack>
//           </Grid.Col>
//         </Grid>
//       </Container>

//       {/* Footer */}
//       <Box bg="light-dark(#f9f9f9, #1a1a1a)" py="xl" mt="xl">
//         <Container size="lg">
//           <Text align="center" size="sm" c="dimmed">
//             © 2025 TripleA. Your Tropical Home Awaits.
//           </Text>
//         </Container>
//       </Box>
//     </Box>
//   );
// }