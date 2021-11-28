import { useColorModeValue } from "hooks";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

function PricingPlanBadge({ children }: Props) {
  const color = useColorModeValue("white", "gray.800");
  const background = useColorModeValue("blue.500", "blue.200");

  return (
    <Flex
      position="absolute"
      paddingY="4px"
      top="24px"
      right="-80px"
      width="240px"
      transform="rotate(45deg)"
      justifyContent="center"
      alignItems="center"
      background={background}
    >
      <Text
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="wider"
        color={color}
      >
        {children}
      </Text>
    </Flex>
  );
}

export default PricingPlanBadge;
