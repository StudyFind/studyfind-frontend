import { useState } from "react";
import { object } from "@studyfind/utils";

import { submitFeature } from "./side";

import { Box, Flex, Grid, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { Form, TextInput, TextareaInput } from "components/atoms";
import { FaLightbulb } from "react-icons/fa";

interface Values {
  name: string;
  description: string;
}

const initialValue = {
  name: "",
  description: "",
};

function FeaturePage() {
  const toast = useToast();

  const [values, setValues] = useState<Values>(initialValue);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const check = (name: string, value: string | File | null) => {
    if (!value && name === "name") return "Name cannot be empty";
    if (!value && name === "description") return "Description cannot be empty";
    return "";
  };

  const getErrorMessages = ({ name, description }: Values) => ({
    name: check("name", name),
    description: check("description", description),
  });

  const onSubmit = async (values: Values) => {
    return submitFeature(values);
  };

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleSubmit = () => {
    const errorMessages = getErrorMessages(values);

    if (object.some(errorMessages)) {
      setErrors(errorMessages);
      return;
    }

    setLoading(true);
    onSubmit(values)
      .then(() => {
        setValues(initialValue);
      })
      .then(() => {
        toast({
          title: "Thank you for suggesting a feature for the StudyFind software!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Grid gap="20px" maxWidth="400px">
      <Box>
        <Heading size="lg" marginBottom="8px">
          Suggest a feature
        </Heading>
        <Text color="gray.500">
          Here is your opportunity to suggest a new useful feature for the software. Please
          elaborate as much as possible so we can help solve the problem at hand. Thank you for
          taking the time to make our software better!
        </Text>
      </Box>
      <Form onSubmit={handleSubmit}>
        <Grid gap="20px">
          <TextInput
            label="Feature Name"
            name="name"
            value={values.name}
            error={errors.name}
            onChange={handleChange}
          />
          <TextareaInput
            label="Feature Description"
            name="description"
            height="150px"
            value={values.description}
            error={errors.description}
            onChange={handleChange}
          />
          <Flex justify="flex-end">
            <Button
              type="submit"
              colorScheme="blue"
              leftIcon={<FaLightbulb />}
              isLoading={loading}
              loadingText="Sending..."
            >
              Suggest Feature
            </Button>
          </Flex>
        </Grid>
      </Form>
    </Grid>
  );
}

export default FeaturePage;
