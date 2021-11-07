import React from "react";
import { InputField, InputWrapper } from "../helpers";

type Props = {
  readonly name: string;
  readonly error?: string;
  readonly label?: string;
  readonly onChange: (name: string, value: File | null) => void;
  readonly [key: string]: any;
};

export const FileInput = React.memo(
  ({ name, error, label, onChange, ...rest }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      const value = files && files[0];
      onChange(name, value);
    };

    return (
      <InputWrapper label={label} error={error}>
        <InputField
          type="file"
          error={error}
          padding="4px !important"
          onChange={handleChange}
          {...rest}
        />
      </InputWrapper>
    );
  }
);
