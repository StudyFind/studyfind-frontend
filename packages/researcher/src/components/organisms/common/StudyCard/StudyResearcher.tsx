import { useColorModeValue, useDevice } from "hooks";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface Props {
  researcher: {
    id: string;
    name: string;
    email: string;
  };
}

function StudyResearcher({ researcher }: Props) {
  const { isPhone } = useDevice();

  const avatar = useColorModeValue("blue.500", "blue.700");
  const background = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box>
      <Flex
        rounded="md"
        gridGap="10px"
        align="flex-end"
        overflow="hidden"
        padding="12px"
        borderWidth="1px"
        borderColor={borderColor}
        background={background}
        width={isPhone ? "100%" : ""}
      >
        <Avatar name={researcher?.name} color="white" background={avatar} />
        <Box>
          <Text isTruncated fontWeight="500">
            {researcher?.name}
          </Text>
          <Text isTruncated color="gray.500">
            {researcher?.email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default StudyResearcher;
