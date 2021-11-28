import moment from "moment";

import { useCollection } from "hooks";
import { getScheduleQuery } from "./side";
import { MeetingDocument } from "@studyfind/types";

import ScheduleMeetingsLoading from "./ScheduleMeetingsLoading";
import ScheduleMeetingsError from "./ScheduleMeetingsError";
import ScheduleMeetingsList from "./ScheduleMeetingsList";
import ScheduleMeetingsEmpty from "./ScheduleMeetingsEmpty";

interface Props {
  date: string;
}

function ScheduleMeetings({ date }: Props) {
  const start = moment(date).startOf("day").valueOf();
  const end = moment(date).endOf("day").valueOf();

  const [meetings, loading, error] = useCollection<MeetingDocument>(getScheduleQuery(start, end));

  if (loading) return <ScheduleMeetingsLoading />;
  if (error) return <ScheduleMeetingsError />;

  return meetings?.length ? (
    <ScheduleMeetingsList meetings={meetings} />
  ) : (
    <ScheduleMeetingsEmpty />
  );
}

export default ScheduleMeetings;
