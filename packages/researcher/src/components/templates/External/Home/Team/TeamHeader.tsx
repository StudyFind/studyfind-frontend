import { Heading, Text, VStack } from "@chakra-ui/react";

interface Props {
  title: string;
  description: string;
}

function TeamHeader({ title, description }: Props) {
  return (
    <VStack spacing="15px" textAlign="center">
      <Heading size="2xl" fontWeight="900">
        {title}
      </Heading>
      <Text color="gray.500" maxWidth="700px">
        {description}
      </Text>
    </VStack>
  );
}

export default TeamHeader;
