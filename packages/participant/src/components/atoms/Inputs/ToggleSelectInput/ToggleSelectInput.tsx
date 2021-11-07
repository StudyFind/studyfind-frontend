import React from "react";

import { useColor } from "hooks";
import { Flex, Button, Tooltip } from "@chakra-ui/react";
import { InputWrapper } from "../helpers";
import { Option } from "types/global";

type Props = {
  readonly name: string;
  readonly value: boolean[];
  readonly error?: string;
  readonly label?: string;
  readonly options: Option[];
  readonly showValueOnHover?: boolean;
  readonly size?: "sm" | "md" | "lg";
  readonly onChange: (name: string, value: boolean[]) => void;
  readonly [key: string]: any;
};

export const ToggleSelectInput = React.memo(
  ({
    name,
    value,
    error,
    label,
    options,
    onChange,
    showValueOnHover = false,
    size = "md",
  }: Props) => {
    const handleChange = (index: number) => {
      const updated = [...value];
      updated[index] = !updated[index];
      onChange(name, updated);
    };

    const borderColor = useColor("gray.200", "gray.700");

    return (
      <InputWrapper label={label} error={error}>
        <Flex>
          {options.map((option, i) => {
            const isSelected = value[i];
            const firstIndex = 0;
            const lastIndex = options.length - 1;

            return (
              <Tooltip key={i} label={showValueOnHover && option.value}>
                <Button
                  size={size}
                  variant="outline"
                  marginLeft="-1px"
                  zIndex={isSelected ? 10 : 1}
                  borderLeftRadius={i !== firstIndex ? 0 : undefined}
                  borderRightRadius={i !== lastIndex ? 0 : undefined}
                  color={isSelected ? "white" : "gray.500"}
                  background={isSelected ? "blue.500" : undefined}
                  borderColor={isSelected ? "blue.500" : borderColor}
                  _hover={{ background: isSelected && "blue.500" }}
                  _active={{ background: isSelected && "blue.500" }}
                  onClick={() => handleChange(i)}
                >
                  {option.label}
                </Button>
              </Tooltip>
            );
          })}
        </Flex>
      </InputWrapper>
    );
  }
);
