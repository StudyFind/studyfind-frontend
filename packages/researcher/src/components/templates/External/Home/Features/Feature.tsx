import { useDevice } from "hooks";
import { Box, Stack, Text } from "@chakra-ui/react";

interface FeatureItem {
  icon: React.ReactElement;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureItem) {
  const { isPhone } = useDevice();

  return (
    <Stack spacing={isPhone ? "15px" : "20px"} direction={isPhone ? "column" : "row"}>
      <Box fontSize="5xl" color="#1A202C">
        {icon}
      </Box>
      <Stack spacing="4px">
        <Text fontWeight="800" fontSize="lg">
          {title}
        </Text>
        <Box color="gray.500">{description}</Box>
      </Stack>
    </Stack>
  );
}

export default Feature;
