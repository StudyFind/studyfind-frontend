import { StudyLocation } from "@studyfind/types";

import { ListItem, Text } from "@chakra-ui/react";
import { Link } from "components/atoms";

interface Props {
  location: StudyLocation;
}

function LocationsItem({ location }: Props) {
  const initial = "https://www.google.com/maps?saddr=My+Location&daddr=";
  const address = location.address;
  const cleaned = address.trim().split(" ").join("+");
  const googleMapsLink = initial + cleaned;

  return (
    <ListItem marginY="4px">
      <Link to={googleMapsLink}>
        <Text color="blue.500" paddingLeft="10px">
          {address}
        </Text>
      </Link>
    </ListItem>
  );
}

export default LocationsItem;
