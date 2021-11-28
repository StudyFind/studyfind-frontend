import { useState } from "react";
import { useCred } from "hooks";

import { auth } from "@studyfind/firebase";

import VerificationPending from "./VerificationPending";
import VerificationSuccess from "./VerificationSuccess";
import VerificationFailure from "./VerificationFailure";

type State = "pending" | "success" | "failure";

function VerificationBanner() {
  const { email } = useCred();

  const [state, setState] = useState<State>("pending");
  const [loading, setLoading] = useState(false);

  const handleSendVerificationEmail = () => {
    setLoading(true);

    auth
      .sendAccountVerificationEmail()
      .then(() => setState("success"))
      .catch(() => setState("failure"))
      .finally(() => setLoading(false));
  };

  return {
    pending: (
      <VerificationPending
        email={email || ""}
        loading={loading}
        handleSendVerificationEmail={handleSendVerificationEmail}
      />
    ),
    success: <VerificationSuccess email={email || ""} />,
    failure: <VerificationFailure />,
  }[state];
}

export default VerificationBanner;
