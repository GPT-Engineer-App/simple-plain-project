import { Container, Text, VStack, Heading, Button, HStack, Box, Link } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

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
    </Box>
  );
};

export default Index;