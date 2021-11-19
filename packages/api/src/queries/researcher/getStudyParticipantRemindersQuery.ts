import { firestore } from "@studyfind/firebase";

export const getStudyParticipantRemindersQuery = firestore.references.getRemindersReference;
