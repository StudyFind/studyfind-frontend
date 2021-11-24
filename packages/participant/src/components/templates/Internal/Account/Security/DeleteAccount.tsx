import { useAuthForm } from "hooks";

import { auth } from "@studyfind/firebase";

import { Grid, Button, useToast } from "@chakra-ui/react";
import { Form } from "components/atoms/Form/Form";
import { EmailInput } from "components/atoms/Inputs/EmailInput/EmailInput";
import { PasswordInput } from "components/atoms/Inputs/PasswordInput/PasswordInput";

import AccountHeader from "../AccountHeader";

function DeleteAccount() {
  const toast = useToast();

  const authForm = useAuthForm({
    initialValues: { email: "", password: "" },
    initialErrors: { email: "", password: "" },
    onSubmit: (values) =>
      auth
        .deleteAccount({
          email: values.email,
          password: values.password,
        })
        .then(() => {
          toast({
            title: "Your account along with all associated data was deleted successfully!",
            status: "success",
            duration: 5000,
            isClosable: true,
            position: "top",
          });
        }),
  });

  return (
    <>
      <AccountHeader
        title="Delete Account"
        description="Deleting your account is a permenant action and will delete all your
        user information and research studies"
      />
      <Form onSubmit={authForm.submit}>
        <Grid gap="15px">
          <EmailInput
            name="email"
            label="Email"
            value={authForm.values.email}
            error={authForm.errors.email}
            onChange={authForm.update}
          />
          <PasswordInput
            name="password"
            label="Password"
            value={authForm.values.password}
            error={authForm.errors.password}
            onChange={authForm.update}
          />
          <Button type="submit" colorScheme="red" isLoading={authForm.loading}>
            Delete Account
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default DeleteAccount;
