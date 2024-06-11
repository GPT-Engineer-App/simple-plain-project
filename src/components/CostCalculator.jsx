import React, { useState } from 'react';
import { Box, Button, Heading, Progress, Radio, RadioGroup, Stack, Text, VStack, Input } from '@chakra-ui/react';

const CostCalculator = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [estimatedSavings, setEstimatedSavings] = useState(0);

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

  const handleCalculate = () => {
    const costPerUser = 100; // Example cost per user
    const savings = teamSize * costPerUser;
    setEstimatedSavings(savings);
  };

  return (
    <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" maxW="md" mx="auto">
      <Heading as="h2" size="lg" mb={4}>Cost Calculator</Heading>
      <Text mb={4}>Select the tools you are using and input the number of people in your team to calculate the estimated savings.</Text>
      <Text mb={2}>Step {step} of 10</Text>
      <Progress value={(step / 10) * 100} size="sm" mb={4} />
      <RadioGroup onChange={setValue} value={value}>
        <VStack align="start" spacing={4}>
          <Radio value="option1">Coda</Radio>
          <Radio value="option2">Notion</Radio>
          <Radio value="option3">Airtable</Radio>
          <Radio value="option4">ClickUp</Radio>
          <Radio value="option5">Asana</Radio>
          <Radio value="option6">Trello</Radio>
          <Radio value="option7">Monday.com</Radio>
          <Radio value="option8">Google Sheets</Radio>
          <Radio value="option9">Microsoft Excel</Radio>
          <Radio value="option10">PowerApps</Radio>
        </VStack>
      </RadioGroup>
      <Text mt={4} mb={2}>Enter the number of people in your team:</Text>
      <Input
        type="number"
        value={teamSize}
        onChange={(e) => setTeamSize(e.target.value)}
        mb={4}
      />
      <Stack direction="row" spacing={4} mt={8}>
        <Button onClick={handlePrevious} isDisabled={step === 1}>Previous</Button>
        <Button onClick={handleNext} colorScheme="orange">Next</Button>
      </Stack>
      <Button onClick={handleCalculate} colorScheme="teal" mt={4}>Calculate Savings</Button>
      {estimatedSavings > 0 && (
        <Text mt={4} fontSize="lg" fontWeight="bold">Estimated Savings: ${estimatedSavings}</Text>
      )}
    </Box>
  );
};

export default CostCalculator;