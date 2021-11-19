import { firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";
import { StudySex, StudyType } from "@studyfind/types";

interface EditStudyDetailsPayload {
  title: string;
  description: string;
  sex: StudySex;

  minAge: number;
  maxAge: number;
  acceptsHealthyParticipants: boolean;
  acceptsRemoteParticipants: boolean;
  type: StudyType;

  conditions: string[];
}

export const editStudyDetails = async (studyID: DocumentID, data: EditStudyDetailsPayload) => {
  return firestore.mutations.updateStudyDocument(studyID, data);
};
