import { updateDocument } from "../utils";

import { getParticipantNotificationReference } from "../references";

import { UpdateParticipantNotification } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const updateParticipantNotificationDocument = (
  participantID: DocumentID,
  notificationID: DocumentID,
  data: UpdateParticipantNotification
) => {
  return updateDocument(getParticipantNotificationReference(participantID, notificationID), data);
};
