import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
  loading: boolean;
  [key: string]: any;
}

export const AuthButton = ({ children, loading, ...rest }: Props) => (
  <Button size="lg" colorScheme="blue" type="submit" isLoading={loading} {...rest}>
    {children}
  </Button>
);
