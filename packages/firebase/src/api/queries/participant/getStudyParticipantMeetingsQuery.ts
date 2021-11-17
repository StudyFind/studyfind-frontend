import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantMeetingsQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getStudyParticipantMeetingsReference(studyID, participantID);
};
