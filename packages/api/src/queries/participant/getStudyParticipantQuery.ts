import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getStudyParticipantReference(studyID, participantID);
};
