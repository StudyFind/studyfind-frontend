import { useState, useEffect } from "react";

import { Message } from "components/atoms";
import { Flex, Spinner } from "@chakra-ui/react";
import { auth } from "@studyfind/firebase";

interface Props {
  code: string;
}

function VerifyEmail({ code }: Props) {
  const [success, setSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (code) {
      auth
        .verifyEmail({ code })
        .then(() => setSuccess(true))
        .catch(() => setSuccess(false));
    } else {
      setSuccess(false);
    }
  }, [code]);

  if (success === null) {
    return (
      <Flex py="120px" w="100%" justify="center">
        <Spinner />
      </Flex>
    );
  }

  return success ? (
    <Message
      status="success"
      title="Verification successful"
      description="Your email has now been verified!"
    />
  ) : (
    <Message
      status="failure"
      title="Verification expired"
      description="Your email verification was unsuccessful"
    />
  );
}

export default VerifyEmail;
