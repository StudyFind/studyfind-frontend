import { memo } from "react";

import { InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { InputField, InputWrapper } from "./helpers";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly left?: JSX.Element;
  readonly leftWidth?: string;
  readonly right?: JSX.Element;
  readonly rightWidth?: string;
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

export const TextInput = memo(
  ({ name, value, error, label, left, leftWidth, right, rightWidth, onChange, ...rest }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange(name, value);
    };

    const adjacentElementStyles = {
      display: "flex",
      alignItems: "center",
      padding: "0px",
      height: "100%",
    };

    const LEFT = left && (
      <InputLeftElement width={leftWidth} {...adjacentElementStyles}>
        {left}
      </InputLeftElement>
    );

    const RIGHT = right && (
      <InputRightElement width={rightWidth} {...adjacentElementStyles}>
        {right}
      </InputRightElement>
    );

    return (
      <InputWrapper label={label} error={error}>
        <InputGroup>
          {LEFT}
          <InputField
            value={value}
            error={error}
            onChange={handleChange}
            paddingLeft={leftWidth}
            paddingRight={rightWidth}
            {...rest}
          />
          {RIGHT}
        </InputGroup>
      </InputWrapper>
    );
  }
);
