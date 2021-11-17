import { auth, firestore } from "src";

interface UpdateNotificationsPayload {
  local?: boolean;
  email?: boolean;
  phone?: boolean;
}

export const updateUserNotifications = (notifications: UpdateNotificationsPayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.updateResearcherDocument(researcherID, {
    notifications,
  });
};
