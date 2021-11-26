import { MeetingDocumentExtended } from "types/extended";

import Wrapper from "../Shared/Wrapper";
import Confirm from "../Shared/Confirm";

import MeetingsCardDetails from "./MeetingsCardDetails";

interface Props {
  meeting: MeetingDocumentExtended;
  handleConfirm: () => void;
}

function MeetingsCard({ meeting, handleConfirm }: Props) {
  return (
    <Wrapper>
      <MeetingsCardDetails name={meeting.name} time={meeting.time} />
      <Confirm
        confirmed={meeting.confirmedByParticipant}
        meetingLink={meeting.link}
        handleConfirm={handleConfirm}
      />
    </Wrapper>
  );
}

export default MeetingsCard;
