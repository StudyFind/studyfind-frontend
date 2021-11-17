import firebase from "firebase";

import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

interface UnsaveStudyPayload {
  studyID: DocumentID;
}

export const unsaveStudy = async ({ studyID }: UnsaveStudyPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateParticipantDocument(participantID, {
    saved: firebase.firestore.FieldValue.arrayRemove(studyID),
  });
};
