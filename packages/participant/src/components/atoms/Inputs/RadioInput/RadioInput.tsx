import React from "react";

import { useColor } from "hooks";
import { Flex, Button, Tooltip } from "@chakra-ui/react";
import { InputWrapper } from "../helpers";
import { Option } from "types/global";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly options: Option[];
  readonly showValueOnHover?: boolean;
  readonly allowUnselect?: boolean;
  readonly size?: "sm" | "md" | "lg";
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

export const RadioInput = React.memo(
  ({
    name,
    value,
    error,
    label,
    options,
    onChange,
    showValueOnHover = false,
    allowUnselect = false,
    size = "md",
  }: Props) => {
    const firstIndex = 0;
    const lastIndex = options.length - 1;

    const handleChange = (option: Option) => {
      if (allowUnselect && option.value === value) {
        onChange(name, "");
      } else {
        onChange(name, option.value);
      }
    };

    const defaultBackground = useColor("gray.200", "gray.700");

    return (
      <InputWrapper label={label} error={error}>
        <Flex>
          {options.map((option, i) => (
            <Tooltip key={i} label={showValueOnHover && option.value}>
              <Button
                key={i}
                size={size}
                variant="outline"
                marginLeft="-1px"
                zIndex={value === option.value ? 10 : 1}
                borderLeftRadius={i !== firstIndex ? 0 : undefined}
                borderRightRadius={i !== lastIndex ? 0 : undefined}
                borderColor={value === option.value ? "blue.500" : defaultBackground}
                color={value === option.value ? "white" : "gray.500"}
                background={value === option.value ? "blue.500" : undefined}
                _hover={{ background: value === option.value && "blue.500" }}
                _active={{ background: value === option.value && "blue.500" }}
                onClick={() => handleChange(option)}
              >
                {option.label}
              </Button>
            </Tooltip>
          ))}
        </Flex>
      </InputWrapper>
    );
  }
);
