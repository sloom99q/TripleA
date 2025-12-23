import { Button, Select, Stack, Textarea, TextInput } from "@mantine/core";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    subject: 'Buy property',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Form submitted:', formData);
    setFormData({ subject: 'Buy property', name: '', phone: '', email: '', message: '' });
    setErrors({});
    alert('Thank you! We will contact you soon.');
  };

  return (
    <Stack
      bg={'#f7f7f7'}
      p={25}
      style={{ borderTopLeftRadius: 50, borderBottomRightRadius: 50 }}
      gap="lg"
    >
      <Select
      label="Subject *"
      placeholder="Select subject"
      value={formData.subject}
      onChange={(value) => handleChange('subject', value)}
      data={['Wall finishes & Cladding', 'Renovation Services', 'Authority Approval', 'Flooring Solutions', 'Interior fit-out', 'Ceiling Works', 'MEP Services', 'Inquiry']}
      searchable
      styles={{
        input: {
        borderColor: '#dee2e6',
        borderRadius: 16,
        padding: '12px 16px',
        fontSize: '14px'
        }
      }}
      />

      <TextInput
      label="Name *"
      placeholder="Salem Alazzawi"
      value={formData.name}
      onChange={(e) => handleChange('name', e.currentTarget.value)}
      error={errors.name}
      styles={{
        input: {
        borderColor: '#dee2e6',
        padding: '12px 16px',
        borderRadius: 16,
        fontSize: '14px'
        }
      }}
      />

      <TextInput
      label="Phone Number *"
      placeholder="050 550 5550"
      value={formData.phone}
      onChange={(e) => handleChange('phone', e.currentTarget.value)}
      error={errors.phone}
      styles={{
        input: {
        borderColor: '#dee2e6',
        padding: '12px 16px',
        borderRadius: 16,
        fontSize: '14px'
        }
      }}
      />

      <TextInput
      label="Email address"
      placeholder="info@triple-a.ae"
      value={formData.email}
      onChange={(e) => handleChange('email', e.currentTarget.value)}
      error={errors.email}
      styles={{
        input: {
        borderColor: '#dee2e6',
        padding: '12px 16px',
        borderRadius: 16,
        fontSize: '14px'
        }
      }}
      />

      <Textarea
      label="Message *"
      placeholder="Your message"
      value={formData.message}
      onChange={(e) => handleChange('message', e.currentTarget.value)}
      error={errors.message}
      minRows={4}
      styles={{
        input: {
        borderColor: '#dee2e6',
        padding: '12px 16px',
        fontSize: '14px',
        borderRadius: 16,
        minHeight: '100px',
        }
      }}
      />

      <Button
      onClick={handleSubmit}
      fullWidth
      bg="black"
      size="md"
      fw={700}
      style={{ borderRadius: '32px' }}
      >
      Submit
      </Button>
    </Stack>
  );
}