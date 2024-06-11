import React, { useState } from 'react';
import { Box, Button, Heading, Progress, Radio, RadioGroup, Stack, Text, VStack, Input, Textarea, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const InteractiveForm = () => {
  const [step, setStep] = useState(1);
  const [value, setValue] = useState('');
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [dataMigration, setDataMigration] = useState('');
  const [dataMigrationDetails, setDataMigrationDetails] = useState('');
  const [budget, setBudget] = useState('');
  const [deadline, setDeadline] = useState('');
  const [problems, setProblems] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [timezone, setTimezone] = useState('');

  const handleNext = () => {
    if (step < 7) {
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
      <Text mb={2}>Step {step} of 7</Text>
      <Progress value={(step / 7) * 100} size="sm" mb={4} />

      {step === 1 && (
        <>
          <Text mb={4}>Do you have any workflows or automations running already?</Text>
          <RadioGroup onChange={setValue} value={value}>
            <VStack align="start" spacing={4}>
              <Radio value="option1">No, I am starting fresh!</Radio>
              <Radio value="option2">Yes, I have an existing system that needs additions.</Radio>
              <Radio value="option3">Yes, I have a system that needs fixing.</Radio>
            </VStack>
          </RadioGroup>
          <Text mt={4} mb={2}>Select the platform(s) you’re currently using.</Text>
          <Stack direction="row" spacing={4} wrap="wrap">
            {['Coda', 'Notion', 'Airtable', 'ClickUp', 'Asana', 'Trello', 'Monday.com', 'Google Sheets', 'Microsoft Excel', 'PowerApps'].map(platform => (
              <Button key={platform} variant="outline" size="sm">{platform}</Button>
            ))}
          </Stack>
        </>
      )}

      {step === 2 && (
        <>
          <Text mb={4}>Give your project a memorable name</Text>
          <Input placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} mb={4} />
          <Text mb={4}>Give us a brief description about your project</Text>
          <Textarea placeholder="Project Description" value={projectDescription} onChange={(e) => setProjectDescription(e.target.value)} mb={4} />
        </>
      )}

      {step === 3 && (
        <>
          <Text mb={4}>Does the project require data migration?</Text>
          <RadioGroup onChange={setDataMigration} value={dataMigration}>
            <VStack align="start" spacing={4}>
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </VStack>
          </RadioGroup>
          {dataMigration === 'yes' && (
            <>
              <Text mt={4} mb={2}>Please tell us about your data migration requirements</Text>
              <Textarea placeholder="Data Migration Requirements" value={dataMigrationDetails} onChange={(e) => setDataMigrationDetails(e.target.value)} mb={4} />
            </>
          )}
        </>
      )}

      {step === 4 && (
        <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="lg" mb={4}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>What is your budget?</Text>
          <Box p={4} borderWidth={1} borderRadius="lg" boxShadow="md" mb={4}>
            <Text fontSize="4xl" fontWeight="bold">$13,000</Text>
            <Text fontSize="sm" color="gray.500">+ any applicable taxes</Text>
            <Text mt={2} fontSize="sm">A project's cost is dependent on how much customization is needed. All custom projects are billed hourly.</Text>
            <Slider aria-label="budget-slider" defaultValue={13000} min={0} max={50000} step={1000} mt={4}>
              <SliderTrack>
                <SliderFilledTrack bg="orange.400" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
        </Box>
      )}

      {step === 5 && (
        <>
          <Text mb={4}>When do you want to get this done by?</Text>
          <Input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} mb={4} />
        </>
      )}

      {step === 6 && (
        <>
          <Text mb={4}>What problems are you looking to solve?</Text>
          <Textarea placeholder="Problems" value={problems} onChange={(e) => setProblems(e.target.value)} mb={4} />
        </>
      )}

      {step === 7 && (
        <>
          <Text mb={4}>Collect contact information</Text>
          <Input placeholder="Contact Information" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} mb={4} />
          <Text mb={4}>Timezone options</Text>
          <Select placeholder="Select Timezone" value={timezone} onChange={(e) => setTimezone(e.target.value)} mb={4}>
            {['PST', 'MST', 'CST', 'EST', 'GMT', 'CET', 'IST', 'CST', 'JST', 'AEST'].map(tz => (
              <option key={tz} value={tz}>{tz}</option>
            ))}
          </Select>
        </>
      )}

      <Stack direction="row" spacing={4} mt={8} justify="space-between">
        <Button onClick={handlePrevious} isDisabled={step === 1} leftIcon={<ArrowBackIcon />}>Previous</Button>
        <Button onClick={handleNext} colorScheme="orange" rightIcon={<ArrowForwardIcon />}>Next</Button>
      </Stack>
    </Box>
  );
};

export default InteractiveForm;