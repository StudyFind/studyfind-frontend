import { auth, firestore } from "src";

export const getParticipantQuery = () => {
  const participantID = auth.getUser().uid;
  return firestore.references.getParticipantReference(participantID);
};
