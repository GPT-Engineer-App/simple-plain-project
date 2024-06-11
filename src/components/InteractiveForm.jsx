import React, { useState } from 'react';
import { Box, Button, Heading, Progress, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react';

const InteractiveForm = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState('');

  const handleNext = () => {
    if (step < 10) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" maxW="md" mx="auto">
      <Heading as="h2" size="lg" mb={4}>Your Vision, Our Design.</Heading>
      <Text mb={4}>Share your ideas, and let's craft tailored systems and workflows that fit your needs.</Text>
      <Text mb={2}>Step {step} of 10</Text>
      <Progress value={(step / 10) * 100} size="sm" mb={4} />
      <RadioGroup onChange={setValue} value={value}>
        <VStack align="start" spacing={4}>
          <Radio value="option1">No, I am starting fresh!</Radio>
          <Radio value="option2">Yes, I have an existing workflow that needs additions.</Radio>
          <Radio value="option3">Yes, I have a broken workflow that needs to be fixed.</Radio>
        </VStack>
      </RadioGroup>
      <Text mt={4} mb={2}>Select the platform(s) you’re currently using.</Text>
      <Stack direction="row" spacing={4} wrap="wrap">
        {['Coda', 'Notion', 'Airtable', 'ClickUp', 'Asana', 'Trello', 'Monday.com', 'Google Sheets', 'Microsoft Excel', 'PowerApps'].map(platform => (
          <Button key={platform} variant="outline" size="sm">{platform}</Button>
        ))}
      </Stack>
      <Stack direction="row" spacing={4} mt={8}>
        <Button onClick={handlePrevious} isDisabled={step === 1}>Previous</Button>
        <Button onClick={handleNext} colorScheme="orange">Next</Button>
      </Stack>
    </Box>
  );
};

export default InteractiveForm;