import React from "react";

import { useColor } from "hooks";
import {
  NumberInput as NumberInputWrapper,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { InputField, InputWrapper } from "../helpers";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly placeholder?: string;
  readonly min?: number;
  readonly max?: number;
  readonly step?: number;
  readonly precision?: number;
  readonly onChange: (name: string, value: number) => void;
  readonly [key: string]: any;
}

export const NumberInput = React.memo(
  ({
    name,
    value,
    error,
    label,
    placeholder,
    min,
    max,
    step = 1,
    precision = 0,
    onChange,
    ...rest
  }: Props) => {
    const handleChange = (value: number) => {
      onChange(name, value);
    };

    const stepperColor = useColor("gray.500", "gray.400");

    return (
      <InputWrapper label={label} error={error}>
        <InputField
          as={NumberInputWrapper}
          min={min}
          max={max}
          step={step}
          precision={precision}
          value={value}
          error={error}
          onChange={handleChange}
          {...rest}
        >
          <InputField as={NumberInputField} error={error} placeholder={placeholder} />
          <NumberInputStepper>
            <NumberIncrementStepper color={stepperColor} />
            <NumberDecrementStepper color={stepperColor} />
          </NumberInputStepper>
        </InputField>
      </InputWrapper>
    );
  }
);
