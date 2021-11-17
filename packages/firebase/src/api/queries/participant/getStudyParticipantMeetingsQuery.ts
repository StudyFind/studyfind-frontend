import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

export const getStudyParticipantMeetingsQuery = (studyID: DocumentID) => {
  const participantID = auth.getUser().uid;
  return firestore.references.getMeetingsReference(studyID, participantID);
};
