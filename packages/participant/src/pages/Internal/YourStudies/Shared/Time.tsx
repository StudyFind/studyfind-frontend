import { datetime } from "@studyfind/utils";
import { Text } from "@chakra-ui/react";

interface Props {
  time: number;
}

function Time({ time }: Props) {
  const displayDate = datetime.getFriendlyDate(time);
  const displayTime = datetime.get12HourTime(time);

  return (
    <Text color="gray.500" fontSize="0.9rem">
      {displayDate} at {displayTime}
    </Text>
  );
}

export default Time;
