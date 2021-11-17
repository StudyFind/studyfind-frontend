import { auth, firestore } from "../../../index";

export const getNotificationsQuery = () => {
  const participantID = auth.getUser().uid;
  return firestore.references.getParticipantNotificationsReference(participantID);
};
