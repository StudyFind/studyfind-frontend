import { firestore } from "src";
import { StudyResource } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

interface EditStudyResourcesPayload {
  resources: StudyResource[];
}

export const editStudyResources = async (studyID: DocumentID, data: EditStudyResourcesPayload) => {
  firestore.mutations.updateStudyDocument(studyID, data);
};
