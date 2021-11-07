import React from "react";
import { InputField, InputWrapper } from "../helpers";

type Props = {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
};

export const DateInput = React.memo(
  ({ name, value, error, label, onChange, ...rest }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange(name, value);
    };

    return (
      <InputWrapper label={label} error={error}>
        <InputField
          type="date"
          value={value}
          error={error}
          onChange={handleChange}
          {...rest}
        />
      </InputWrapper>
    );
  }
);
