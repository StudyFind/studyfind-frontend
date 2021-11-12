import React from "react";

import { useColor } from "hooks";
import { Icon, Flex, Text, Tooltip } from "@chakra-ui/react";
import { FaExclamationCircle, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { IconType } from "react-icons/lib";

type Status = {
  readonly colorScheme: "green" | "gray" | "red";
  readonly icon: IconType;
};

type Statuses = {
  readonly success: Status;
  readonly neutral: Status;
  readonly failure: Status;
};

interface Props {
  children: React.ReactNode;
  status: "success" | "neutral" | "failure";
  hint: string;
}

export const ConfirmationStatus = React.memo(({ children, status = "neutral", hint }: Props) => {
  const statuses: Statuses = {
    success: { colorScheme: "green", icon: FaCheckCircle },
    neutral: { colorScheme: "gray", icon: FaExclamationCircle },
    failure: { colorScheme: "red", icon: FaTimesCircle },
  };

  const { colorScheme, icon } = statuses[status];

  const textColor = useColor(`${colorScheme}.500`, `${colorScheme}.300`);
  const borderColor = useColor(`${colorScheme}.400`, `${colorScheme}.300`);

  return (
    <Tooltip label={hint}>
      <Flex
        padding="6px 12px"
        align="center"
        gridGap="8px"
        cursor="default"
        fontSize="14px"
        fontWeight="600"
        rounded="md"
        color={textColor}
        borderColor={borderColor}
        borderWidth="1px"
      >
        <Icon as={icon} />
        <Text>{children}</Text>
      </Flex>
    </Tooltip>
  );
});
