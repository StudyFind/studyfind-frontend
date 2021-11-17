import firebase from "firebase";

import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

interface SaveStudyPayload {
  studyID: DocumentID;
}

export const saveStudy = async ({ studyID }: SaveStudyPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateParticipantDocument(participantID, {
    saved: firebase.firestore.FieldValue.arrayUnion(studyID),
  });
};
