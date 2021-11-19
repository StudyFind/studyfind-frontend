import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

interface ConfirmMeetingPayload {
  studyID: DocumentID;
  meetingID: DocumentID;
}

export const confirmMeeting = async ({ studyID, meetingID }: ConfirmMeetingPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateMeetingDocument(studyID, participantID, meetingID, {
    confirmedByParticipant: true,
  });
};
