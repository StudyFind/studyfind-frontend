import { auth, firestore } from "src";

export const getNotificationsQuery = () => {
  const participantID = auth.getUser().uid;
  return firestore.references.getParticipantNotificationsReference(participantID);
};
