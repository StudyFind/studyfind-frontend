import { auth, firestore } from "@studyfind/firebase";

export const getParticipantQuery = () => {
  const participantID = auth.getUser().uid;
  return firestore.references.getParticipantReference(participantID);
};
