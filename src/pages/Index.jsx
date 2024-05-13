import { Container, VStack, Input, Button, Textarea, Box, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [contentDetails, setContentDetails] = useState("");
  const [transactionData, setTransactionData] = useState("");
  const [invoice, setInvoice] = useState("");

  const generateInvoice = () => {
    const invoiceContent = `Invoice Details:\nContent: ${contentDetails}\nTransaction: ${transactionData}`;
    setInvoice(invoiceContent);
  };

  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={4} w="full">
        <Heading>Create Your Invoice</Heading>
        <Textarea
          placeholder="Enter content details"
          value={contentDetails}
          onChange={(e) => setContentDetails(e.target.value)}
        />
        <Textarea
          placeholder="Enter transaction data"
          value={transactionData}
          onChange={(e) => setTransactionData(e.target.value)}
        />
        <Button colorScheme="blue" onClick={generateInvoice}>Generate Invoice</Button>
        {invoice && (
          <Box p={4} mt={4} w="full" borderWidth="1px" borderRadius="lg">
            <Text>{invoice}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;