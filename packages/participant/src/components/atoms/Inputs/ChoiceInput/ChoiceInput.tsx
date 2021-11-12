import React from "react";
import { SimpleGrid, RadioGroup, Radio } from "@chakra-ui/react";
import { InputWrapper } from "../helpers";
import { Option } from "types/global";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly options: Option[];
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

export const ChoiceInput = React.memo(
  ({ name, value, error, label, options, onChange, ...rest }: Props) => {
    const handleChange = (value: string) => {
      onChange(name, value);
    };

    return (
      <InputWrapper label={label} error={error}>
        <RadioGroup value={value} onChange={handleChange} {...rest}>
          <SimpleGrid spacing="4px" alignItems="left" color="gray.500">
            {options.map((option, i) => (
              <Radio key={i} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </SimpleGrid>
        </RadioGroup>
      </InputWrapper>
    );
  }
);
