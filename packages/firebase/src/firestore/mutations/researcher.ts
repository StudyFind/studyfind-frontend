import { setDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getResearcherReference } from "../references";

import { CreateResearcherDocument, UpdateResearcherDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createResearcherDocument = (
  researcherID: DocumentID,
  data: CreateResearcherDocument
) => {
  return setDocument(getResearcherReference(researcherID), data);
};

export const updateResearcherDocument = (
  researcherID: DocumentID,
  data: UpdateResearcherDocument
) => {
  return updateDocument(getResearcherReference(researcherID), data);
};

export const deleteResearcherDocument = (researcherID: DocumentID) => {
  return deleteDocument(getResearcherReference(researcherID));
};
