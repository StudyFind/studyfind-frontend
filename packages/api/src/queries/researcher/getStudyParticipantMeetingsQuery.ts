import { firestore } from "@studyfind/firebase";

export const getStudyParticipantMeetingsQuery = firestore.references.getMeetingsReference;
