import { useState } from "react";
import { object } from "@studyfind/utils";

import { Box, Flex, Grid, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { FaBug } from "react-icons/fa";
import { Form } from "components/atoms/Form/Form";
import { TextareaInput } from "components/atoms/Inputs/TextareaInput/TextareaInput";
import { SelectInput } from "components/atoms/Inputs/SelectInput/SelectInput";
import { FileInput } from "components/atoms/Inputs/FileInput/FileInput";

interface Values {
  description: string;
  screenshot: File | null;
  browser: string;
  system: string;
}

function Bug() {
  const toast = useToast();

  const [values, setValues] = useState<Values>({
    description: "",
    screenshot: null,
    browser: "",
    system: "",
  });
  const [errors, setErrors] = useState({
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const check = (name: string, value: string | File | null) => {
    if (!value && name === "description") return "Description cannot be empty";
    return "";
  };

  const getErrorMessages = ({ description, screenshot, browser, system }: Values) => ({
    description: check("description", description),
    browser: check("browser", browser),
    system: check("system", system),
    screenshot: check("screenshot", screenshot),
  });

  const onSubmit = async (values: Values) => {};

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
        setValues({
          description: "",
          screenshot: null,
          browser: "",
          system: "",
        });
      })
      .then(() => {
        toast({
          title: "Thank you for reporting a bug for the StudyFind software!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Grid gap="20px">
      <Form onSubmit={handleSubmit}>
        <Grid gap="20px" maxWidth="400px">
          <Box>
            <Heading size="lg" marginBottom="8px">
              Report a bug
            </Heading>
            <Text maxWidth="400px" color="gray.500">
              Here is your opportunity to give us feedback about our software. Please elaborate on
              your experiences, including which feature of the software you may be referring to.
              Thank you!
            </Text>
          </Box>
          <TextareaInput
            label="Bug Description"
            name="description"
            height="100px"
            value={values.description}
            error={errors.description}
            onChange={handleChange}
          />
          <FileInput
            label="Bug Screenshot"
            name="screenshot"
            value={values.screenshot}
            onChange={() => {}}
          />
          <Flex gridGap="20px">
            <SelectInput
              label="Browser"
              name="browser"
              options={[
                { label: "", value: "" },
                { label: "Chrome", value: "Chrome" },
                { label: "Edge", value: "Edge" },
                { label: "Firefox", value: "Firefox" },
                { label: "Opera", value: "Opera" },
                { label: "Internet Explorer", value: "Internet Explorer" },
                { label: "Other", value: "Other" },
              ]}
              value={values.browser}
              onChange={handleChange}
            />
            <SelectInput
              label="System"
              name="system"
              options={[
                { label: "", value: "" },
                { label: "Windows", value: "Windows" },
                { label: "Android", value: "Android" },
                { label: "macOS", value: "macOS" },
                { label: "iOS", value: "iOS" },
                { label: "Other", value: "Other" },
              ]}
              value={values.system}
              onChange={handleChange}
            />
          </Flex>
          <Flex justify="flex-end">
            <Button
              type="submit"
              colorScheme="red"
              leftIcon={<FaBug />}
              isLoading={loading}
              loadingText="Sending..."
            >
              Report Bug
            </Button>
          </Flex>
        </Grid>
      </Form>
    </Grid>
  );
}

export default Bug;
