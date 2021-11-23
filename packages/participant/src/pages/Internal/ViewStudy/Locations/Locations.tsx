import { StudyDocumentExtended } from "types/extended";

import TabHeader from "../TabHeader";

import LocationsEmpty from "./LocationsEmpty";
import LocationsList from "./LocationsList";

interface Props {
  study: StudyDocumentExtended;
}

function Locations({ study }: Props) {
  if (!study?.locations?.length) {
    return <LocationsEmpty />;
  }

  return (
    <>
      <TabHeader heading="Locations" />
      <LocationsList locations={study.locations} />
    </>
  );
}

export default Locations;
