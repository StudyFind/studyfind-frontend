import { Message } from "components/atoms";

function RemindersError() {
  return (
    <Message
      status="failure"
      title="Connection Error"
      description="We could not load your reminders"
    />
  );
}

export default RemindersError;
