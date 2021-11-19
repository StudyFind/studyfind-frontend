import { firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

export const getYourStudiesQuery = (studyIDs: DocumentID[]) => {
  // ! IMPORTANT: This returns a list of document references due to the nature in which the database is laid out
  return studyIDs.map((studyID) => firestore.references.getStudyReference(studyID));
};
