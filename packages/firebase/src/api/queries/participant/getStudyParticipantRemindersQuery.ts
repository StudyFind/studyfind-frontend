import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantRemindersQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getRemindersReference(studyID, participantID);
};
