import { auth, firestore } from "../../../index";

export const getParticipantQuery = () => {
  const participantID = auth.getUser().uid;
  return firestore.references.getParticipantReference(participantID);
};
