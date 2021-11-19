import { firestore } from "@studyfind/firebase";
import { Date, DocumentID, WeeklyOffset } from "@studyfind/types";

interface EditReminderPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  reminderID: DocumentID;
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
}

export const editReminder = async ({
  studyID,
  participantID,
  reminderID,
  title,
  times,
  startDate,
  endDate,
}: EditReminderPayload) => {
  return firestore.mutations.updateReminderDocument(studyID, participantID, reminderID, {
    title,
    times,
    startDate,
    endDate,
  });
};
