import React from "react";

import { useColor } from "hooks";
import { Text, Button } from "@chakra-ui/react";
import { ButtonClickEventHandler } from "types/global";

interface Props {
  readonly isLoading: boolean;
  readonly fetchedAll: boolean;
  readonly fetchedAllText: string;
  readonly onClick?: ButtonClickEventHandler;
}

export const LoadMoreButton = React.memo(
  ({ isLoading, fetchedAll, fetchedAllText, onClick }: Props) => {
    const borderColor = useColor("gray.200", "gray.700");
    const backgroundColor = useColor("white", "gray.900");
    const hoverBackgroundColor = useColor("gray.100", "gray.800");
    const activeBackgroundColor = useColor("gray.200", "gray.700");

    if (fetchedAll) {
      return <Text color="gray.400">{fetchedAllText}</Text>;
    }

    return (
      <Button
        background={backgroundColor}
        borderColor={borderColor}
        borderWidth="1px"
        color="gray.500"
        variant="outline"
        size="sm"
        _hover={{ background: hoverBackgroundColor }}
        _active={{ background: activeBackgroundColor }}
        isLoading={isLoading}
        onClick={onClick}
      >
        Load more
      </Button>
    );
  }
);
