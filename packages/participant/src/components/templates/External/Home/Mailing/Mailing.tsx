import { actions } from "@studyfind/api";

import { useState } from "react";
import { useColor, useDevice } from "hooks";
import { validate } from "@studyfind/utils";

import { Heading, Button, Icon, VStack, Text, HStack } from "@chakra-ui/react";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

import { Card } from "components/atoms/Card/Card";
import { Form } from "components/atoms/Form/Form";
import { TextInput } from "components/atoms/Inputs/TextInput/TextInput";

import HomeSectionWrapper from "../HomeSectionWrapper";

function Mailing() {
  const { isPhone } = useDevice();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (_: string, value: string) => {
    setEmail(value);
    setError(validate.email(value));
  };

  const handleSubmit = () => {
    const err = validate.email(email);

    if (err) {
      setError(err);
      return;
    }

    setLoading(true);

    return actions.participant
      .subscribeMailing({ email })
      .then(() => setSuccess(true))
      .catch(() => setError("There was an error"))
      .finally(() => setLoading(false));
  };

  const cardBackgroundColor = useColor("gray.100", "gray.800");

  return (
    <HomeSectionWrapper>
      <Card
        width={isPhone ? "90%" : "50%"}
        minWidth={isPhone ? "0" : "400px"}
        padding={isPhone ? "30px" : "50px"}
        background={cardBackgroundColor}
      >
        {success ? (
          <VStack>
            <Icon as={FaCheckCircle} color="green.500" fontSize="48px" marginBottom="15px" />
            <Heading size="lg">Thank you for subscribing</Heading>
            <Text color="gray.500" fontWeight="500">
              We&apos;ll only send you the most imporant updates
            </Text>
          </VStack>
        ) : (
          <Form onSubmit={handleSubmit}>
            <VStack align="center" spacing="10px">
              <Heading
                size="lg"
                minWidth="250px"
                marginBottom="20px"
                textAlign="center"
                width="90%"
              >
                Get updates in your inbox
              </Heading>
              <TextInput
                name="email"
                value={email}
                error={error}
                onChange={handleChange}
                placeholder="example@domain.com"
              />
              <Button
                type="submit"
                width="100%"
                colorScheme="blue"
                isLoading={loading}
                loadingText="Subscribing..."
              >
                Join Now
              </Button>
              <HStack fontSize="12px" align="center" spacing="6px">
                <Icon as={FaShieldAlt} color="green.500" />
                <Text color="gray.500">We&apos;ll send relevant content only</Text>
              </HStack>
            </VStack>
          </Form>
        )}
      </Card>
    </HomeSectionWrapper>
  );
}

export default Mailing;
