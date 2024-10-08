import { memo, useState } from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { TextInput } from "./TextInput";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

export const PasswordInput = memo(({ name, value, error, label, onChange, ...rest }: Props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const toggleButtonColor = useColorModeValue("gray.500", "gray.400");
  const toggleButtonHoverColor = useColorModeValue("blue.500", "blue.400");

  const TOGGLE_BUTTON = (
    <Button
      size="sm"
      color={toggleButtonColor}
      _hover={{ color: toggleButtonHoverColor }}
      _active={{ color: toggleButtonHoverColor }}
      background="transparent"
      onClick={toggleShow}
    >
      {show ? "Hide" : "Show"}
    </Button>
  );

  return (
    <TextInput
      name={name}
      label={label}
      value={value}
      error={error}
      onChange={onChange}
      type={show ? "text" : "password"}
      rightWidth="64px"
      right={TOGGLE_BUTTON}
      {...rest}
    />
  );
});
