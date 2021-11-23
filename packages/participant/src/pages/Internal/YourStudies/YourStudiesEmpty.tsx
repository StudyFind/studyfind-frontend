import { Message } from "components/atoms";

function YourStudiesEmpty() {
  return (
    <Message
      status="neutral"
      title="No studies to show"
      description="Enroll for studies to begin participating"
      height="400px"
      showBackground
    />
  );
}

export default YourStudiesEmpty;
