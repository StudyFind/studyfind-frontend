import { memo } from "react";
import { InputWrapper, InputField } from "../helpers";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

export const LinkInput = memo(({ name, value, error, label, onChange, ...rest }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/ /g, ""); // remove all whitespace because URLs don't have spaces
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField value={value} error={error} onChange={handleChange} {...rest} />
    </InputWrapper>
  );
});
