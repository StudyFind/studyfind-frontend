import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "hooks";

import HomeSectionWrapper from "../HomeSectionWrapper";

function ResearcherCTA() {
  const background = useColorModeValue("gray.100", "gray.800");

  return (
    <HomeSectionWrapper background={background}>
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: "4", lg: "6" }}
        py={{ base: "16", sm: "20" }}
        textAlign="center"
      >
        <Heading size="xl" fontWeight="extrabold" letterSpacing="tight">
          Do you manage participants?
        </Heading>
        <Text mt="4" fontSize="lg">
          We also have a solution which helps you easily coordinate and communicate with your
          participants by scheduling meetings, setting reminders, writing private notes, sending
          messages, notifications updates, and more!
        </Text>
        <Button
          mt="8"
          as="a"
          href="https://researcher.studyfind.org"
          target="_blank"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          Visit Researcher Website
        </Button>
      </Box>
    </HomeSectionWrapper>
  );
}

export default ResearcherCTA;
