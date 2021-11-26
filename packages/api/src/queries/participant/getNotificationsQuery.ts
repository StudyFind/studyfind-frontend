import { auth, firestore } from "@studyfind/firebase";

export const getNotificationsQuery = () => {
  const participantID = auth.getUser().uid;

  return firestore.references
    .getParticipantNotificationsReference(participantID)
    .orderBy("createdAt", "desc");
};
