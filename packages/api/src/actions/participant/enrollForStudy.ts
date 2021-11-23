import { auth, firestore } from "@studyfind/firebase";
import { DocumentID, Timezone, StudyQuestion, StudyParticipantReponse } from "@studyfind/types";

interface EnrollForStudyPayload {
  studyID: DocumentID;
  timezone: Timezone;
  availability: string;
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
  enrolled: DocumentID[];
}

export const enrollForStudy = async ({
  studyID,
  timezone,
  availability,
  questions,
  responses,
  enrolled,
}: EnrollForStudyPayload) => {
  const participantID = auth.getUser().uid;

  const createStudyParticipantPromise = firestore.mutations.createStudyParticipantDocument(
    studyID,
    participantID,
    {
      status: "interested",
      timezone,
      availability,
      questions,
      responses,
    }
  );

  const updateParticipantPromise = firestore.mutations.updateParticipantDocument(participantID, {
    enrolled,
  });

  return Promise.allSettled([createStudyParticipantPromise, updateParticipantPromise]);
};
