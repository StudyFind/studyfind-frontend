import Login from "./Forms/Login";
import Signup from "./Forms/Signup";
import ForgotPassword from "./Forms/ForgotPassword";

type Tab = "login" | "signup" | "forgotPassword";

interface Props {
  tab: Tab;
  setTab: React.Dispatch<React.SetStateAction<Tab>>;
}

function AuthForm({ tab, setTab }: Props) {
  return {
    login: <Login setTab={setTab} />,
    signup: <Signup setTab={setTab} />,
    forgotPassword: <ForgotPassword setTab={setTab} />,
  }[tab];
}

export default AuthForm;
