import { useAuthForm } from "hooks";

import { auth } from "@studyfind/firebase";

import { EmailInput } from "components/atoms/Inputs/EmailInput/EmailInput";
import { PasswordInput } from "components/atoms/Inputs/PasswordInput/PasswordInput";
import { AuthForm, AuthHeading, AuthInput, AuthButton, AuthLink } from "../Blocks";

type Tab = "login" | "signup" | "forgotPassword";

interface Props {
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

function Login({ setTab }: Props) {
  const authForm = useAuthForm({
    initialValues: { email: "", password: "" },
    initialErrors: { email: "", password: "" },
    onSubmit: (values) =>
      auth.signin({
        email: values.email || "",
        password: values.password || "",
      }),
  });

  return (
    <AuthForm onSubmit={authForm.submit}>
      <AuthHeading>Welcome Back!</AuthHeading>
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
      <AuthButton loading={authForm.loading}>Login</AuthButton>
      <AuthLink onClick={() => setTab("forgotPassword")}>Forgot Password?</AuthLink>
    </AuthForm>
  );
}

export default Login;
