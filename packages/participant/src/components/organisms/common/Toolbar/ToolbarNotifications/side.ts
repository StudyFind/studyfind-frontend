import { firestore } from "@studyfind/firebase";

const side = process.env.REACT_APP_SIDE;

export const getNotificationsReference =
  side === "RESEARCHER"
    ? firestore.references.getResearcherNotificationsReference
    : firestore.references.getParticipantNotificationsReference;

export const updateNotificationDocument =
  side === "RESEARCHER"
    ? firestore.mutations.updateResearcherNotificationDocument
    : firestore.mutations.updateParticipantNotificationDocument;
