import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getMessageReference, getMessagesReference } from "../references";

import { CreateMessageDocument, UpdateMessageDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateMessageDocument
) => {
  return createDocument(getMessagesReference(studyID, participantID), data);
};

export const updateMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  messageID: DocumentID,
  data: UpdateMessageDocument
) => {
  return updateDocument(getMessageReference(studyID, participantID, messageID), data);
};

export const deleteMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  messageID: DocumentID
) => {
  return deleteDocument(getMessageReference(studyID, participantID, messageID));
};
