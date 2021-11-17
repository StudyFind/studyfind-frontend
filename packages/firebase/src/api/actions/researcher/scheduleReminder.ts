import { auth, firestore } from "../../../index";
import { Date, DocumentID, WeeklyOffset } from "@studyfind/types";

interface ScheduleReminderPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
}

export const scheduleReminder = async ({
  studyID,
  participantID,
  title,
  times,
  startDate,
  endDate,
}: ScheduleReminderPayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.createReminderDocument(studyID, participantID, {
    title,
    times,
    startDate,
    endDate,
    researcherID,
    participantID,
    studyID,
    confirmedByParticipant: false,
  });
};
