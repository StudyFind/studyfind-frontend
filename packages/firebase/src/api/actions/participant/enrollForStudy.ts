import firebase from "firebase";

import { auth, firestore } from "../../../index";
import { DocumentID, Timezone, StudyQuestion, StudyParticipantReponse } from "@studyfind/types";

interface EnrollForStudyPayload {
  studyID: DocumentID;
  timezone: Timezone;
  availability: string;
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
}

export const enrollForStudy = async ({
  studyID,
  timezone,
  availability,
  questions,
  responses,
}: EnrollForStudyPayload) => {
  const participantID = auth.getUser().uid;

  firestore.mutations.createStudyParticipantDocument(studyID, participantID, {
    status: "interested",
    timezone,
    availability,
    questions,
    responses,
  });

  return firestore.mutations.updateParticipantDocument(participantID, {
    enrolled: firebase.firestore.FieldValue.arrayUnion(studyID),
  });
};
