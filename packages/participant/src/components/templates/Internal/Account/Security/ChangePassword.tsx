import { useAuthForm } from "hooks";

import { auth } from "@studyfind/firebase";

import { Grid, Button } from "@chakra-ui/react";
import { Form } from "components/atoms/Form/Form";
import { PasswordInput } from "components/atoms/Inputs/PasswordInput/PasswordInput";

import AccountHeader from "../AccountHeader";

function ChangePassword() {
  const authForm = useAuthForm({
    initialValues: { password: "", newPassword: "" },
    initialErrors: { password: "", newPassword: "" },
    onSubmit: (values) =>
      auth.changePassword({
        password: values.password || "",
        newPassword: values.newPassword || "",
      }),
  });

  return (
    <>
      <AccountHeader
        title="Change Password"
        description="We recommend using a long and strong password that is unique to your
        StudyFind account"
      />
      <Form onSubmit={authForm.submit}>
        <Grid gap="15px">
          <PasswordInput
            name="password"
            label="Old Password"
            value={authForm.values.password}
            error={authForm.errors.password}
            onChange={authForm.update}
          />
          <PasswordInput
            name="newPassword"
            label="New Password"
            value={authForm.values.newPassword}
            error={authForm.errors.newPassword}
            onChange={authForm.update}
          />
          <Button type="submit" colorScheme="blue" isLoading={authForm.loading}>
            Change Password
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default ChangePassword;
