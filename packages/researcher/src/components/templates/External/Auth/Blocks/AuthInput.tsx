import { MemoExoticComponent } from "react";

interface Props {
  as: MemoExoticComponent<any>;
  [key: string]: any;
}

export const AuthInput = ({ as: As, ...rest }: Props) => {
  return <As size="lg" {...rest} />;
};
