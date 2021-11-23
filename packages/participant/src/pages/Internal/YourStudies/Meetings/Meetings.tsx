import { useCollection } from "hooks";

import { actions, queries } from "@studyfind/api";

import { Loader } from "components/atoms";
import { MeetingDocumentExtended, StudyDocumentExtended } from "types/extended";

import MeetingsView from "./MeetingsView";
import MeetingsError from "./MeetingsError";

interface Props {
  study: StudyDocumentExtended;
}

function Meetings({ study }: Props) {
  const [meetings, loading, error] = useCollection<MeetingDocumentExtended>(
    queries.participant.getStudyParticipantMeetingsQuery(study.id)
  );

  const handleConfirm = (meeting: MeetingDocumentExtended) => {
    actions.participant.confirmMeeting({
      studyID: study.id,
      meetingID: meeting.id,
    });
  };

  if (loading) return <Loader height="100%" />;
  if (error) return <MeetingsError />;
  if (meetings) return <MeetingsView meetings={meetings} handleConfirm={handleConfirm} />;

  return null;
}

export default Meetings;
