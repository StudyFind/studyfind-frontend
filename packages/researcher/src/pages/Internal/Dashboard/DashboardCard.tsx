import { useColorMode, useColorModeValue } from "hooks";
import { Box, Flex, Heading, Text, Badge, Tag, TagLabel } from "@chakra-ui/react";

import { StudyDocumentExtended } from "types/extended";

interface Props {
  study: StudyDocumentExtended;
}

function DashboardCard({ study }: Props) {
  const { colorMode } = useColorMode();

  const background = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      background={background}
      borderColor={borderColor}
      borderWidth="1px"
      overflow="hidden"
      rounded="md"
      padding="20px"
      width="100%"
    >
      <Flex justify="space-between" align="center" marginBottom="8px">
        {study.activated ? (
          <Badge colorScheme="green">Active</Badge>
        ) : (
          <Badge colorScheme="red">Inactive</Badge>
        )}
      </Flex>
      <Heading size="sm" noOfLines={2} marginBottom="6px">
        {study.title}
      </Heading>
      {
        <Flex height="24px" gridGap="4px" marginTop="8px" flexWrap="wrap" overflow="hidden">
          {study.conditions.map((condition, i) => (
            <Tag
              key={i}
              size="sm"
              colorScheme="blue"
              variant={colorMode === "light" ? "solid" : "subtle"}
            >
              <TagLabel>{condition}</TagLabel>
            </Tag>
          ))}
        </Flex>
      }
      <Text color="gray.500" noOfLines={5} marginTop="10px">
        {study.description}
      </Text>
    </Box>
  );
}

export default DashboardCard;
