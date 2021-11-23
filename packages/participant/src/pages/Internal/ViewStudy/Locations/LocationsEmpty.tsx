import { Message } from "components/atoms";

function LocationsEmpty() {
  return (
    <Message
      status="neutral"
      title="No Locations"
      description="Locations are used when filtering for users trying to find studies near them and therefore adding locations improves their chances of finding your study"
      height="400px"
      showBackground
    />
  );
}

export default LocationsEmpty;
