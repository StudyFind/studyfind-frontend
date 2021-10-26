import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getStudyParticipantNoteReference, getStudyParticipantNotesReference } from "../references";

import { CreateNoteDocument, UpdateNoteDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createNoteDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateNoteDocument
) => {
  return createDocument(getStudyParticipantNotesReference(studyID, participantID), data);
};

export const updateNoteDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  noteID: DocumentID,
  data: UpdateNoteDocument
) => {
  return updateDocument(getStudyParticipantNoteReference(studyID, participantID, noteID), data);
};

export const deleteNoteDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  noteID: DocumentID
) => {
  return deleteDocument(getStudyParticipantNoteReference(studyID, participantID, noteID));
};
