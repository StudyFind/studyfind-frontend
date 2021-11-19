import { auth, firestore } from "@studyfind/firebase";
import { DocumentID, Timestamp, URL } from "@studyfind/types";

interface ScheduleMeetingPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  name: string;
  link: URL;
  time: Timestamp;
}

export const scheduleMeeting = async ({
  studyID,
  participantID,
  name,
  link,
  time,
}: ScheduleMeetingPayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.createMeetingDocument(studyID, participantID, {
    name,
    link,
    time,
    researcherID,
    participantID,
    studyID,
    confirmedByParticipant: false,
  });
};
