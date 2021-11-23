import { OrderedList } from "@chakra-ui/react";
import { StudyResource } from "@studyfind/types";

import ResourceItem from "./ResourcesItem";

interface Props {
  resources: StudyResource[];
}

function ResourcesList({ resources }: Props) {
  return (
    <OrderedList paddingLeft="10px">
      {resources.map((resource, i) => (
        <ResourceItem key={i} resource={resource} />
      ))}
    </OrderedList>
  );
}

export default ResourcesList;
