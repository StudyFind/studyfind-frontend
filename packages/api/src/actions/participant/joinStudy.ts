import { auth, firestore } from "@studyfind/firebase";
import { DocumentID, Timezone, StudyQuestion, StudyParticipantReponse } from "@studyfind/types";

interface JoinStudyPayload {
  studyID: DocumentID;
  timezone: Timezone;
  availability: string;
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
  enrolled: DocumentID[];
}

export const joinStudy = async ({
  studyID,
  timezone,
  availability,
  questions,
  responses,
  enrolled,
}: JoinStudyPayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.createStudyParticipantDocument(studyID, participantID, {
    status: "interested",
    timezone,
    availability,
    questions,
    responses,
  });
};
