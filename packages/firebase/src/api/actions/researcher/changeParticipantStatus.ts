import { firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";
import { StudyParticipantStatus } from "@studyfind/types";

interface ChangeParticipantStatusPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  status: StudyParticipantStatus;
}

export const changeParticipantStatus = async ({
  studyID,
  participantID,
  status,
}: ChangeParticipantStatusPayload) => {
  return firestore.mutations.updateStudyParticipantDocument(studyID, participantID, {
    status,
  });
};
