import firebase from "firebase";

import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

interface WithdrawPayload {
  studyID: DocumentID;
}

export const withdrawFromStudy = async ({ studyID }: WithdrawPayload) => {
  const participantID = auth.getUser().uid;

  return Promise.allSettled([
    firestore.mutations.deleteStudyParticipantDocument(participantID, studyID),
    firestore.mutations.updateParticipantDocument(participantID, {
      enrolled: firebase.firestore.FieldValue.arrayRemove(studyID),
    }),
  ]);
};
