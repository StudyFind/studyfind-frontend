import { Message } from "components/atoms";

function FilesEmpty() {
  return (
    <Message
      status="neutral"
      title="No Files"
      description="This research study does not have any files uploaded right now. Relevent files will be uploaded by the researcher when necessary."
      height="400px"
      showBackground
    />
  );
}

export default FilesEmpty;
