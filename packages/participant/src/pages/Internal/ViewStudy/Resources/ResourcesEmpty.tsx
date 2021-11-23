import { Message } from "components/atoms";

function ResourcesEmpty() {
  return (
    <Message
      status="neutral"
      title="No Resources"
      description="Resources are any useful links relevant to the research study (like marketing material or external surveys) that need to be shared with participants"
      height="400px"
      showBackground
    />
  );
}

export default ResourcesEmpty;
