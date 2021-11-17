import moment from "moment";

import { useCollection } from "hooks";
import { auth, services } from "@studyfind/firebase";

import ScheduleMeetingsLoading from "./ScheduleMeetingsLoading";
import ScheduleMeetingsError from "./ScheduleMeetingsError";
import ScheduleMeetingsList from "./ScheduleMeetingsList";
import ScheduleMeetingsEmpty from "./ScheduleMeetingsEmpty";
import { MeetingDocument } from "@studyfind/types";

interface Props {
  date: string;
}

function ScheduleMeetings({ date }: Props) {
  const idType = process.env.REACT_APP_SIDE === "RESEARCHER" ? "researcherID" : "participantID";

  const [meetings, loading, error] = useCollection<MeetingDocument>(
    services.firestore
      .collection("meetings")
      .where(idType, "==", auth.getUser().uid)
      .where("time", ">=", moment(date).startOf("day").valueOf())
      .where("time", "<=", moment(date).endOf("day").valueOf())
      .orderBy("time", "asc")
  );

  if (loading) return <ScheduleMeetingsLoading />;
  if (error) return <ScheduleMeetingsError />;

  return meetings?.length ? (
    <ScheduleMeetingsList meetings={meetings} />
  ) : (
    <ScheduleMeetingsEmpty />
  );
}

export default ScheduleMeetings;
