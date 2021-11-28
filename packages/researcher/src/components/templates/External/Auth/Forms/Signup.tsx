import { useAuthForm } from "hooks";

import { auth } from "@studyfind/firebase";

import { Text } from "@chakra-ui/react";
import { Link } from "components/atoms/Link/Link";
import { Message } from "components/atoms/Message/Message";
import { TextInput } from "components/atoms/Inputs/TextInput/TextInput";
import { EmailInput } from "components/atoms/Inputs/EmailInput/EmailInput";
import { PasswordInput } from "components/atoms/Inputs/PasswordInput/PasswordInput";
import { AuthForm, AuthHeading, AuthInput, AuthButton, AuthLink } from "../Blocks";

type Tab = "login" | "signup" | "forgotPassword";

interface Props {
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

function Signup({ setTab }: Props) {
  const authForm = useAuthForm({
    initialValues: { name: "", email: "", password: "" },
    initialErrors: { name: "", email: "", password: "" },
    onSubmit: (values) =>
      auth.signup({
        side: "PARTICIPANT",
        name: values?.name || "",
        email: values?.email || "",
        password: values?.password || "",
      }),
  });

  if (authForm.success) {
    return (
      <Message
        status="success"
        title="Account Created!"
        description="Check your email for a verification link"
        padding="40px 30px"
      >
        <AuthLink onClick={() => setTab("login")}>Back to login</AuthLink>
      </Message>
    );
  }

  const links = {
    terms:
      "https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fterms-of-service.pdf?alt=media&token=fc3f4e63-3260-43f2-b838-61c562bbac9e",
    privacy:
      "https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fprivacy-policy.pdf?alt=media&token=1f6fa4be-b10a-4286-9bb0-92a1f992ad71",
  };

  const TERMS = (
    <Link to={links.terms} color="blue.500">
      terms of service
    </Link>
  );

  const PRIVACY = (
    <Link to={links.privacy} color="blue.500">
      privacy policy
    </Link>
  );

  return (
    <AuthForm onSubmit={authForm.submit}>
      <AuthHeading>Create Account!</AuthHeading>
      <AuthInput
        as={TextInput}
        name="name"
        placeholder="Name"
        value={authForm.values.name}
        error={authForm.errors.name}
        onChange={authForm.update}
      />
      <AuthInput
        as={EmailInput}
        name="email"
        placeholder="Email"
        value={authForm.values.email}
        error={authForm.errors.email}
        onChange={authForm.update}
      />
      <AuthInput
        as={PasswordInput}
        name="password"
        placeholder="Password"
        value={authForm.values.password}
        error={authForm.errors.password}
        onChange={authForm.update}
      />
      <AuthButton loading={authForm.loading}>Sign up</AuthButton>
      <Text color="gray.500" fontSize="xs" textAlign="center">
        By creating an account, you agree to our {TERMS} and {PRIVACY}
      </Text>
    </AuthForm>
  );
}

export default Signup;
