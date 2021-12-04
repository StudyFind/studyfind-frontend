import { Text } from "@chakra-ui/react";
import VerificationBar from "./VerificationBar";

interface Props {
  email: string;
}

function VerificationSuccess({ email }: Props) {
  return (
    <VerificationBar status="success">
      <Text>
        {/* The "Text" component here is required to retain a space before the email */}
        Your verification email has been sent to <b>{email}</b>
      </Text>
    </VerificationBar>
  );
}

export default VerificationSuccess;
