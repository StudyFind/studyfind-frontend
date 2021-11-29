import { memo } from "react";
import { Select } from "@chakra-ui/react";
import { Option } from "types/global";
import { InputField, InputWrapper } from "../helpers";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly options: Option[];
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

export const SelectInput = memo(
  ({ name, value, error, label, options, onChange, ...rest }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      onChange(name, value);
    };

    return (
      <InputWrapper label={label} error={error}>
        <InputField as={Select} value={value} onChange={handleChange} {...rest}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </InputField>
      </InputWrapper>
    );
  }
);
