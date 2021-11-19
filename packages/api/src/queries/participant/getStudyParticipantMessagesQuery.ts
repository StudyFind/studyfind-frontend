import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantMessagesQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getMessagesReference(studyID, participantID);
};
