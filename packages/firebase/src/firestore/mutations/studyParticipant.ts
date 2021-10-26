import { setDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getStudyParticipantReference } from "../references";

import { CreateStudyParticipantDocument, UpdateStudyParticipantDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createStudyParticipantDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateStudyParticipantDocument
) => {
  return setDocument(getStudyParticipantReference(studyID, participantID), data);
};

export const updateStudyParticipantDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: UpdateStudyParticipantDocument
) => {
  return updateDocument(getStudyParticipantReference(studyID, participantID), data);
};

export const deleteStudyParticipantDocument = (studyID: DocumentID, participantID: DocumentID) => {
  return deleteDocument(getStudyParticipantReference(studyID, participantID));
};
