import { firestore } from "../../../index";
import { StudyLocation } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

interface EditStudyLocationsPayload {
  locations: StudyLocation[];
}

export const editStudyLocations = async (studyID: DocumentID, data: EditStudyLocationsPayload) => {
  return firestore.mutations.updateStudyDocument(studyID, data);
};
