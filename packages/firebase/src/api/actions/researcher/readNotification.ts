import { auth, firestore } from "src";
import { DocumentID } from "@studyfind/types";

interface ReadNotificationPayload {
  notificationID: DocumentID;
}

export const readNotification = async ({ notificationID }: ReadNotificationPayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.updateResearcherNotificationDocument(researcherID, notificationID, {
    read: true,
  });
};
