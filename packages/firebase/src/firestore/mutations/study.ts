import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getStudiesReference, getStudyReference } from "../references";

import { CreateStudyDocument, UpdateStudyDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createStudyDocument = (data: CreateStudyDocument) => {
  return createDocument(getStudiesReference(), data);
};

export const updateStudyDocument = (studyID: DocumentID, data: UpdateStudyDocument) => {
  return updateDocument(getStudyReference(studyID), data);
};

export const deleteStudyDocument = (studyID: DocumentID) => {
  return deleteDocument(getStudyReference(studyID));
};
