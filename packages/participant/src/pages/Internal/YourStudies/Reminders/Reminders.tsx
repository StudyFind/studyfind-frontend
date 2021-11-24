import { useToast } from "@chakra-ui/react";
import { useCollection } from "hooks";

import { Loader } from "components/atoms";

import RemindersView from "./RemindersView";
import RemindersError from "./RemindersError";
import { queries, actions } from "@studyfind/api";
import { ReminderDocumentExtended, StudyDocumentExtended } from "types/extended";

interface Props {
  study: StudyDocumentExtended;
}

function Reminders({ study }: Props) {
  const toast = useToast();

  const [reminders, loading, error] = useCollection<ReminderDocumentExtended>(
    queries.participant.getStudyParticipantRemindersQuery(study.id)
  );

  const handleConfirm = (reminder: ReminderDocumentExtended) => {
    actions.participant
      .confirmReminder({
        studyID: study.id,
        reminderID: reminder.id,
      })
      .then(() => {
        toast({
          title:
            "You have successfully confirmed the reminder. You will be sent these reminders at the days and times shown in the associated reminder.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      });
  };

  if (loading) return <Loader height="100%" />;
  if (error) return <RemindersError />;
  if (reminders) return <RemindersView reminders={reminders} handleConfirm={handleConfirm} />;

  return null;
}

export default Reminders;
