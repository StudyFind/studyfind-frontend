import { ConfirmationStatus } from "components/atoms";

interface Props {
  confirmed: boolean;
}

function Status({ confirmed }: Props) {
  return confirmed ? (
    <ConfirmationStatus status="success" hint="Confirmed by participant">
      Confirmed
    </ConfirmationStatus>
  ) : (
    <ConfirmationStatus status="neutral" hint="Waiting for participant to confirm">
      Pending
    </ConfirmationStatus>
  );
}

export default Status;
