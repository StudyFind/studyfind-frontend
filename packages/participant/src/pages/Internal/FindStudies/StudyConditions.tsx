import { Flex, Tag, TagLabel } from "@chakra-ui/react";
import { useColorMode } from "hooks";

interface Props {
  conditions: string[];
  selectedConditions: string[];
  handleAddCondition: (condition: string) => void;
}

function StudyConditions({ conditions, selectedConditions, handleAddCondition }: Props) {
  const { colorMode } = useColorMode();

  return (
    <Flex height="24px" gridGap="4px" marginTop="8px" flexWrap="wrap" overflow="hidden">
      {conditions?.map((condition, i) => (
        <Tag
          key={i}
          size="sm"
          colorScheme="blue"
          variant={
            colorMode === "light" || selectedConditions?.includes(condition) ? "solid" : "subtle"
          }
          onClick={() => handleAddCondition(condition)}
          cursor="pointer"
        >
          <TagLabel>{condition}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
}

export default StudyConditions;
