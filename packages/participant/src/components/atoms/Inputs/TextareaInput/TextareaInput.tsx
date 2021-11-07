import React, { useState, useEffect } from "react";
import { Text, Flex, Textarea, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { InputField } from "../helpers";

type Props = {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly limit?: number;
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
};

export const TextareaInput = React.memo(
  ({ name, value, error, label, limit, onChange, ...rest }: Props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      setCount(value?.length || 0);
    }, [value]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      onChange(name, value);
    };

    return (
      <FormControl isInvalid={!!error}>
        {label && <FormLabel>{label}</FormLabel>}
        <InputField
          as={Textarea}
          style={{ minHeight: 0 }}
          height="100px"
          value={value}
          error={error}
          onChange={handleChange}
          maxLength={limit}
          {...rest}
        />
        {(limit || error) && (
          <Flex justify="space-between" align="center" marginY="6px">
            {error && <FormErrorMessage marginTop="0">{error}</FormErrorMessage>}
            {limit && (
              <Text marginLeft="auto" color="gray.500" fontSize="sm">
                {count}/{limit}
              </Text>
            )}
          </Flex>
        )}
      </FormControl>
    );
  }
);
