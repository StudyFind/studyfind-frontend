import { Message } from "components/atoms";

function ScheduleMeetingsError() {
  return (
    <Message
      status="failure"
      title="Connection Error"
      description="We were unable to load your meetings. Please check your connection and try again."
      marginY="10px"
      height="250px"
      showBackground
    />
  );
}

export default ScheduleMeetingsError;
