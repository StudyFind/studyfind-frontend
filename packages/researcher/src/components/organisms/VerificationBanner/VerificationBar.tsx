import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon?: IconType;
  children: React.ReactNode;
  status: "success" | "error" | "warning";
}

function VerificationBar({ icon, children, status }: Props) {
  return (
    <Alert status={status} zIndex="100" height="100%" minHeight="56px">
      <AlertIcon as={icon} />
      {children}
    </Alert>
  );
}

export default VerificationBar;
