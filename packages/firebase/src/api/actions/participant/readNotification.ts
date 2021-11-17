import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

interface ReadNotificationPayload {
  notificationID: DocumentID;
}

export const readNotification = async ({ notificationID }: ReadNotificationPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateParticipantNotificationDocument(participantID, notificationID, {
    read: true,
  });
};
