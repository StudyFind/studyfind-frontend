import { firestore } from "src";

export const getStudyParticipantMessagesQuery =
  firestore.references.getStudyParticipantMessagesReference;
