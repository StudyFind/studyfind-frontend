import { auth, firestore } from "@studyfind/firebase";
import { DocumentID, Timezone, StudyQuestion, StudyParticipantReponse } from "@studyfind/types";

interface JoinStudyPayload {
  studyID: DocumentID;
  enrolled: DocumentID[];
}

export const leaveStudy = async ({ studyID, enrolled }: JoinStudyPayload) => {
  const participantID = auth.getUser().uid;

  const deleteStudyParticipantPromise = firestore.mutations.deleteStudyParticipantDocument(
    studyID,
    participantID
  );

  const updateParticipantPromise = firestore.mutations.updateParticipantDocument(participantID, {
    enrolled,
  });

  return Promise.allSettled([deleteStudyParticipantPromise, updateParticipantPromise]);
};
