import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

interface ConfirmReminderPayload {
  studyID: DocumentID;
  reminderID: DocumentID;
}

export const confirmReminder = async ({ studyID, reminderID }: ConfirmReminderPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateReminderDocument(studyID, participantID, reminderID, {
    confirmedByParticipant: true,
  });
};
