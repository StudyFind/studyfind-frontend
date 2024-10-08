import React from "react";

import { useColorModeValue } from "hooks";
import { Flex, HStack } from "@chakra-ui/react";

interface Props {
  stepIndex: number;
  numberOfSteps: number;
  allowSkippingSteps: boolean;
  handleSelect: (index: number) => void;
}

function WizardFormSteps({ stepIndex, numberOfSteps, allowSkippingSteps, handleSelect }: Props) {
  const blueColor = useColorModeValue("blue.500", "blue.400");
  const reachedTextColor = useColorModeValue("white", "gray.800");

  return (
    <HStack>
      {Array(numberOfSteps)
        .fill(true)
        .map((_, i) => {
          const reachedStep = i <= stepIndex;
          const allowClick = allowSkippingSteps || reachedStep;

          const cursor = allowClick ? "pointer" : "not-allowed";
          const variant = reachedStep ? "solid" : "outline";

          const handleSelectTab = () => {
            if (allowClick) {
              handleSelect(i);
            }
          };

          return (
            <Flex
              key={i}
              width="24px"
              height="24px"
              rounded="full"
              cursor={cursor}
              variant={variant}
              onClick={handleSelectTab}
              color={reachedStep ? reachedTextColor : blueColor}
              background={reachedStep ? blueColor : undefined}
              borderColor={blueColor}
              borderWidth={reachedStep ? undefined : "1px"}
              justify="center"
              align="center"
              fontSize="12px"
              fontWeight="600"
            >
              {i + 1}
            </Flex>
          );
        })}
    </HStack>
  );
}

export default WizardFormSteps;
