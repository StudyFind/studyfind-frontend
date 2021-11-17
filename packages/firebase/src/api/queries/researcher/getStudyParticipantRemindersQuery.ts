import { firestore } from "../../../index";

export const getStudyParticipantRemindersQuery = firestore.references.getRemindersReference;
