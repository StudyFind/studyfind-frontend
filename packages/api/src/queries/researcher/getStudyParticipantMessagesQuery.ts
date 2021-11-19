import { firestore } from "@studyfind/firebase";

export const getStudyParticipantMessagesQuery = firestore.references.getMessagesReference;
