import { datetime } from "@studyfind/utils";
import { useDevice } from "hooks";

import { Tooltip, Text } from "@chakra-ui/react";

interface Props {
  time: number;
}

function ToolbarNotificationsItemTime({ time }: Props) {
  const displayTime = datetime.get12HourTime(time);
  const displayDate = datetime.getFriendlyDate(time);
  const relativeTime = datetime.getRelativeTime(time);

  const { isPhone } = useDevice();

  return (
    <Tooltip label={`${displayDate} at ${displayTime}`}>
      <Text
        cursor="pointer"
        fontSize={isPhone ? "14px" : "12px"}
        marginBottom={isPhone ? "4px" : ""}
        color="gray.500"
      >
        {relativeTime}
      </Text>
    </Tooltip>
  );
}

export default ToolbarNotificationsItemTime;
