import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

interface JoinStudyPayload {
  studyID: DocumentID;
  enrolled: DocumentID[];
}

export const leaveStudy = async ({ studyID, enrolled }: JoinStudyPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.deleteStudyParticipantDocument(studyID, participantID);
};
