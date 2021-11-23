import { ReminderDocumentExtended } from "types/extended";

import Wrapper from "../Shared/Wrapper";
import Confirm from "../Shared/Confirm";

import ReminderDetails from "./RemindersCardDetails";

interface Props {
  reminder: ReminderDocumentExtended;
  handleConfirm: () => void;
}

function ReminderCardParticipant({ reminder, handleConfirm }: Props) {
  return (
    <Wrapper>
      <ReminderDetails
        title={reminder.title}
        startDate={reminder.startDate}
        endDate={reminder.endDate}
        times={reminder.times}
      />
      <Confirm confirmed={reminder.confirmedByParticipant} handleConfirm={handleConfirm} />
    </Wrapper>
  );
}

export default ReminderCardParticipant;
