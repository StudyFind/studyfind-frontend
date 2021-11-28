import { Message } from "components/atoms";

function ScheduleMeetingsEmpty() {
  return (
    <Message
      status="neutral"
      title="Nothing to see here"
      description="You don't have any meetings on the selected day"
      marginY="10px"
      height="250px"
      showBackground
    />
  );
}

export default ScheduleMeetingsEmpty;
