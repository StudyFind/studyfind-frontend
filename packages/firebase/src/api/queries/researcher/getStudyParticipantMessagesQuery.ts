import { firestore } from "../../../index";

export const getStudyParticipantMessagesQuery = firestore.references.getMessagesReference;
