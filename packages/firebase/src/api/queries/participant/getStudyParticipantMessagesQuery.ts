import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantMessagesQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getStudyParticipantMessagesReference(studyID, participantID);
};
