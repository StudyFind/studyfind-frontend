import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getStudyParticipantReference(studyID, participantID);
};
