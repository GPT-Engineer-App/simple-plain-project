import { Box, Container, Text, VStack, Heading, Button, HStack, Link, SimpleGrid, Card, CardHeader, CardBody, Icon } from "@chakra-ui/react";
import { FaRocket, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box as="nav" bg="white" py={4} boxShadow="sm">
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Box>
            <img src="/path-to-logo.png" alt="Logo" />
          </Box>
          <HStack spacing={8}>
            <Link href="#" fontWeight="medium">Home</Link>
            <Link href="#" fontWeight="medium">Solutions</Link>
            <Link href="#" fontWeight="medium">Case Studies</Link>
            <Link href="#" fontWeight="medium">Contact</Link>
          </HStack>
        </Container>
      </Box>
      <Container centerContent maxW="container.lg" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">Enabling visionaries to achieve moonshot ambitions.</Heading>
          <Text fontSize="lg">Imaginary Space is the secure, enterprise AI Automation company purpose-built for elite financial institutions & Startups — helping you save time, slash costs, and automate workflows.</Text>
          <Button leftIcon={<FaRocket />} colorScheme="orange" size="lg">
            Get Started
          </Button>
        </VStack>
      </Container>
      <Box bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">Achieve groundbreaking transformation in just 30 days</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Card>
                <CardHeader>
                  <Heading as="h3" size="md">SaaS Spend</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaArrowDown} color="orange.400" boxSize={8} />
                    <Text fontSize="4xl" fontWeight="bold">-50%</Text>
                    <Text>Reduce the amount you are spending on tools by up to 50%.</Text>
                  </VStack>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <Heading as="h3" size="md">Manual Processes</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={FaArrowUp} color="green.400" boxSize={8} />
                    <Text fontSize="4xl" fontWeight="bold">8hr</Text>
                    <Text>Automate and remove manual processes saving up to 8hrs a week.</Text>
                  </VStack>
                </CardBody>
              </Card>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;