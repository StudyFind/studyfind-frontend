import { firestore } from "@studyfind/firebase";

export const getStudyParticipantNotesQuery = firestore.references.getNotesReference;
