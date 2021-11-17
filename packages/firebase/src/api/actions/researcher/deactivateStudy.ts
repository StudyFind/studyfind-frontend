import { firestore } from "src";
import { DocumentID } from "@studyfind/types";

export const deactivateStudy = async (studyID: DocumentID) => {
  return firestore.mutations.updateStudyDocument(studyID, {
    activated: false,
  });
};
