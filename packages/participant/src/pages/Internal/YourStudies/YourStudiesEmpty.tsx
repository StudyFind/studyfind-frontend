import { Message, Link } from "components/atoms";
import { Button } from "@chakra-ui/react";

function YourStudiesEmpty() {
  return (
    <Message
      status="neutral"
      title="No studies to show"
      description="Enroll for studies to begin participating"
      height="400px"
      showBackground
    >
      <Link to="/find-studies">
        <Button>Find Studies</Button>
      </Link>
    </Message>
  );
}

export default YourStudiesEmpty;
