import { FaTimesCircle } from "react-icons/fa";
import VerificationBar from "./VerificationBar";

function VerificationFailure() {
  return (
    <VerificationBar status="error" icon={FaTimesCircle}>
      An error ocurred while sending your verification email. Please try again later.
    </VerificationBar>
  );
}

export default VerificationFailure;
