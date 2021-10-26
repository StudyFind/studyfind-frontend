import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import {
  getStudyParticipantMessageReference,
  getStudyParticipantMessagesReference,
} from "../references";

import { CreateMessageDocument, UpdateMessageDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateMessageDocument
) => {
  return createDocument(getStudyParticipantMessagesReference(studyID, participantID), data);
};

export const updateMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  messageID: DocumentID,
  data: UpdateMessageDocument
) => {
  return updateDocument(
    getStudyParticipantMessageReference(studyID, participantID, messageID),
    data
  );
};

export const deleteMessageDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  messageID: DocumentID
) => {
  return deleteDocument(getStudyParticipantMessageReference(studyID, participantID, messageID));
};
