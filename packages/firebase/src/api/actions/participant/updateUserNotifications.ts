import { auth, firestore } from "src";

interface UpdateUserNotificationsPayload {
  local?: boolean;
  email?: boolean;
  phone?: boolean;
}

export const updateUserNotifications = (notifications: UpdateUserNotificationsPayload) => {
  const participantID = auth.getUser().uid;
  return firestore.mutations.updateParticipantDocument(participantID, { notifications });
};
