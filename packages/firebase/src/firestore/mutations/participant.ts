import { setDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getParticipantReference } from "../references";

import { CreateParticipantDocument, UpdateParticipantDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createParticipantDocument = (
  participantID: DocumentID,
  data: CreateParticipantDocument
) => {
  return setDocument(getParticipantReference(participantID), data);
};

export const updateParticipantDocument = (
  participantID: DocumentID,
  data: UpdateParticipantDocument
) => {
  return updateDocument(getParticipantReference(participantID), data);
};

export const deleteParticipantDocument = (participantID: DocumentID) => {
  return deleteDocument(getParticipantReference(participantID));
};
