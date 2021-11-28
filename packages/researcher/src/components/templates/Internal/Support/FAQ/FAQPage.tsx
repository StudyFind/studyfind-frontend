import {
  Box,
  Heading,
  Text,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

interface Props {
  questions: {
    prompt: string;
    answer: string;
  }[];
}

function FAQPage({ questions }: Props) {
  return (
    <Grid gap="20px">
      <Box>
        <Heading size="lg" marginBottom="8px">
          Frequently Asked Questions (FAQ)
        </Heading>
        <Text color="gray.500">
          Here are some frequently asked questions to help you navigate and use the software,
          understand how your data is being stored, as well as learn more about StudyFind
        </Text>
      </Box>
      <Accordion allowToggle>
        {questions.map((question) => (
          <AccordionItem borderColor="gray.700" borderLeftWidth="1px" borderRightWidth="1px">
            <AccordionButton color="blue.400" fontWeight="600">
              <Box flex="1" textAlign="left">
                {question.prompt}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>{question.answer}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Grid>
  );
}

export default FAQPage;
