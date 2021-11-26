import React from "react";

import { useColorModeValue } from "hooks";
import { Grid, Heading, Text, Checkbox } from "@chakra-ui/react";

interface Props {
  readonly name: string;
  readonly value: boolean;
  readonly error?: string;
  readonly label?: string;
  readonly details?: string;
  readonly onChange: (name: string, value: boolean) => void;
  readonly [key: string]: any;
}

export const CheckboxInput = React.memo(
  ({ name, value, error, label, details, onChange, ...rest }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.checked;
      onChange(name, value);
    };

    const textColor = useColorModeValue("gray.500", "gray.400");
    const errorColor = useColorModeValue("red.500", "red.400");

    return (
      <Checkbox
        size="md"
        width="100%"
        alignItems="flex-start"
        isChecked={value}
        onChange={handleChange}
        borderColor={error && errorColor}
        {...rest}
      >
        <Grid gap="2px">
          <Heading size="sm" marginTop="-1px">
            {label}
          </Heading>
          <Text fontSize="sm" color={textColor}>
            {details}
          </Text>
          <Text fontSize="sm" color={errorColor}>
            {error}
          </Text>
        </Grid>
      </Checkbox>
    );
  }
);
