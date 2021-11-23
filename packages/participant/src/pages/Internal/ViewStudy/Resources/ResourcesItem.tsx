import { ListItem, Text } from "@chakra-ui/react";
import { StudyResource } from "@studyfind/types";

import { Link } from "components/atoms";

interface Props {
  resource: StudyResource;
}

function ResourcesItem({ resource }: Props) {
  return (
    <ListItem marginY="4px">
      <Link to={resource.link}>
        <Text color="blue.500" paddingLeft="10px">
          {resource.name}
        </Text>
      </Link>
    </ListItem>
  );
}

export default ResourcesItem;
