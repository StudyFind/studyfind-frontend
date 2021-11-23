import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantMessagesQuery = (
  studyID: DocumentID,
  participantID: DocumentID
) => {
  return firestore.references.getMessagesReference(studyID, participantID).orderBy("time", "desc");
};
