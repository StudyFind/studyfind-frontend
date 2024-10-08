import { firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

export const activateStudy = async (studyID: DocumentID) => {
  return firestore.mutations.updateStudyDocument(studyID, {
    activated: true,
  });
};
