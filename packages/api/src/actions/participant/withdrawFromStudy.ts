import firebase from "firebase";

import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

interface WithdrawFromStudyPayload {
  studyID: DocumentID;
}

export const withdrawFromStudy = async ({ studyID }: WithdrawFromStudyPayload) => {
  const participantID = auth.getUser().uid;

  return Promise.allSettled([
    firestore.mutations.deleteStudyParticipantDocument(participantID, studyID),
    firestore.mutations.updateParticipantDocument(participantID, {
      enrolled: firebase.firestore.FieldValue.arrayRemove(studyID),
    }),
  ]);
};
