import { useToast } from "@chakra-ui/react";
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
  const toast = useToast();

  const [meetings, loading, error] = useCollection<MeetingDocumentExtended>(
    queries.participant.getStudyParticipantMeetingsQuery(study.id)
  );

  const handleConfirm = (meeting: MeetingDocumentExtended) => {
    actions.participant
      .confirmMeeting({
        studyID: study.id,
        meetingID: meeting.id,
      })
      .then(() => {
        toast({
          title:
            "You have successfully confirmed this meeting time. You will be sent a reminder 30 minutes prior to this meeting so please be on time. You can join the meeting by clicking the join button!",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  if (loading) return <Loader height="100%" />;
  if (error) return <MeetingsError />;
  if (meetings) return <MeetingsView meetings={meetings} handleConfirm={handleConfirm} />;

  return null;
}

export default Meetings;
