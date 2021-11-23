import { Box, Heading } from "@chakra-ui/react";

import Time from "../Shared/Time";

interface Props {
  name: string;
  time: number;
}

function MeetingDetails({ name, time }: Props) {
  return (
    <Box marginBottom="8px">
      <Heading size="md">{name}</Heading>
      <Time time={time} />
    </Box>
  );
}

export default MeetingDetails;
