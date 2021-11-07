import { useAuthForm } from "hooks";

import { auth } from "@studyfind/firebase";

import { Message } from "components/atoms/Message/Message";
import { EmailInput } from "components/atoms/Inputs/EmailInput/EmailInput";
import { AuthForm, AuthHeading, AuthInput, AuthButton, AuthLink } from "../Blocks";

type Tab = "login" | "signup" | "forgotPassword";

interface Props {
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

function ForgotPassword({ setTab }: Props) {
  const authForm = useAuthForm({
    initialValues: { email: "" },
    initialErrors: { email: "" },
    onSubmit: (values) =>
      auth.sendPasswordResetEmail({
        email: values.email || "",
      }),
  });

  if (authForm.success) {
    return (
      <Message
        status="success"
        title="Email Sent!"
        description="Check your email for a password reset link"
        padding="40px 60px"
      >
        <AuthLink onClick={() => setTab("login")}>Back to login</AuthLink>
      </Message>
    );
  }

  return (
    <AuthForm onSubmit={authForm.submit}>
      <AuthHeading>Forgot Password</AuthHeading>
      <AuthInput
        as={EmailInput}
        name="email"
        placeholder="Email"
        value={authForm.values.email}
        error={authForm.errors.email}
        onChange={authForm.update}
      />
      <AuthButton loading={authForm.loading}>Send Password Reset Email</AuthButton>
      <AuthLink onClick={() => setTab("login")}>Back to login</AuthLink>
    </AuthForm>
  );
}

export default ForgotPassword;
