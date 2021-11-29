import { memo, useEffect, useState } from "react";
import { InputField, InputWrapper } from "../helpers";

interface Props {
  readonly name: string;
  readonly value: string;
  readonly error?: string;
  readonly label?: string;
  readonly onChange: (name: string, value: string) => void;
  readonly [key: string]: any;
}

const normalizePhone = (value: string) => {
  const cleaned = value.replace(/\+1/, "").replace(/[^\d]/g, "");

  if (/(\d{3})(\d{3})(\d{1,4})/.exec(cleaned)) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{1,4})/, "($1) $2-$3").substr(0, 17);
  }

  if (/(\d{3})(\d{1,3})/.exec(cleaned)) {
    return cleaned.replace(/(\d{3})(\d{1,3})/, "($1) $2");
  }

  if (/(\d{1,3})/.exec(cleaned)) {
    return cleaned.replace(/(\d{1,3})/, "($1");
  }

  return "";
};

const cleanPhone = (value: string) => {
  return value.replace(/\D/g, "").slice(-10);
};

export const PhoneInput = memo(({ name, value, error, label, onChange, ...rest }: Props) => {
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setPhone(normalizePhone(value));
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.replace(/\D/g, "").length <= 10) {
      const value = cleanPhone(event.target.value);
      onChange(name, value);
    }
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        value={phone}
        error={error}
        onChange={handleChange}
        autoComplete="phone"
        {...rest}
      />
    </InputWrapper>
  );
});
