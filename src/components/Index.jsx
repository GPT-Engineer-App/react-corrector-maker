import { Box, Button, Text, Input, VStack, Heading } from "@chakra-ui/react";
import { FaTools } from "react-icons/fa";

const Index = () => {
  const handleGenerateComponent = () => {
    console.log("Generating component...");
  };

  const handleCorrectCode = () => {
    console.log("Correcting code...");
  };

  const handleWriteScript = () => {
    console.log("Writing script...");
  };

  return (
    <Box p={5} maxW="600px" mx="auto">
      <Heading mb={4} textAlign="center">
        React/Next.js Tool Helper <FaTools />
      </Heading>
      <VStack spacing={4}>
        <Text>Enter your component or script requirements below:</Text>
        <Input placeholder="Describe your component..." />
        <Button colorScheme="blue" onClick={handleGenerateComponent}>
          Generate Component
        </Button>
        <Button colorScheme="green" onClick={handleCorrectCode}>
          Correct Code
        </Button>
        <Button colorScheme="orange" onClick={handleWriteScript}>
          Write Script
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
