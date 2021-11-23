import { OrderedList } from "@chakra-ui/react";
import { StudyLocation } from "@studyfind/types";

import LocationsItem from "./LocationsItem";

interface Props {
  locations: StudyLocation[];
}

function LocationsList({ locations }: Props) {
  return (
    <OrderedList paddingLeft="10px">
      {locations.map((location, i) => (
        <LocationsItem key={i} location={location} />
      ))}
    </OrderedList>
  );
}

export default LocationsList;
