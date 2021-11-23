import { Message } from "components/atoms";

function LocationsEmpty() {
  return (
    <Message
      status="neutral"
      title="No Questions"
      description="Questions are used to screen participants when signing up for your study and automatically assigns them an eligibility score based on their responses"
      height="400px"
      showBackground
    />
  );
}

export default LocationsEmpty;
