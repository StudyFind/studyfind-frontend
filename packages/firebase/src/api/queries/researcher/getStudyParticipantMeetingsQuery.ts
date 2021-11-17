import { firestore } from "src";

export const getStudyParticipantMeetingsQuery =
  firestore.references.getStudyParticipantMeetingsReference;
