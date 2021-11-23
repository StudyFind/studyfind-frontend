import { transform } from "@studyfind/utils";
import { Heading } from "@chakra-ui/react";

import ReminderWeekdays from "./RemindersCardWeekdays";
import ReminderTimes from "./RemindersCardTimes";
import ReminderDates from "./RemindersCardDates";

interface Props {
  title: string;
  startDate: string;
  endDate: string;
  times: number[];
}

function ReminderDetails({ title, startDate, endDate, times }: Props) {
  const [weekdays, timeStrings] = transform.convertOffsetsToWeekdaysAndTimes(times);

  return (
    <>
      <Heading size="md">{title}</Heading>
      <ReminderDates startDate={startDate} endDate={endDate} />
      <ReminderWeekdays weekdays={weekdays} />
      <ReminderTimes times={timeStrings} />
    </>
  );
}

export default ReminderDetails;
