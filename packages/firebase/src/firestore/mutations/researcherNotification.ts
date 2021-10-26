import { updateDocument } from "../utils";

import { getResearcherNotificationReference } from "../references";

import { UpdateResearcherNotification } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const updateResearcherNotificationDocument = (
  researcherID: DocumentID,
  notificationID: DocumentID,
  data: UpdateResearcherNotification
) => {
  return updateDocument(getResearcherNotificationReference(researcherID, notificationID), data);
};
