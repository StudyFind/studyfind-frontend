import { firestore } from "../../../index";

export const getStudyParticipantNotesQuery = firestore.references.getNotesReference;
