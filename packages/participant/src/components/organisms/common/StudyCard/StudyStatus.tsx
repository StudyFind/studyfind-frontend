import { Badge } from "@chakra-ui/react";

interface Props {
  activated: boolean;
}

function StudyStatus({ activated }: Props) {
  return activated ? (
    <Badge colorScheme="green">Active</Badge>
  ) : (
    <Badge colorScheme="red">Inactive</Badge>
  );
}

export default StudyStatus;
