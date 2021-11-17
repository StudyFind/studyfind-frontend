import { firestore } from "src";
import { StudyQuestion } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

interface EditStudyQuestionsPayload {
  questions: StudyQuestion[];
}

export const editStudyQuestions = async (studyID: DocumentID, data: EditStudyQuestionsPayload) => {
  return firestore.mutations.updateStudyDocument(studyID, data);
};
