import { Flex, Tag, TagLabel } from "@chakra-ui/react";

interface Props {
  conditions: string[];
}

function StudyConditions({ conditions }: Props) {
  return (
    <Flex height="24px" gridGap="4px" marginTop="8px" flexWrap="wrap" overflow="hidden">
      {conditions?.map((condition, i) => (
        <Tag key={i} size="sm" colorScheme="blue">
          <TagLabel>{condition}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
}

export default StudyConditions;
