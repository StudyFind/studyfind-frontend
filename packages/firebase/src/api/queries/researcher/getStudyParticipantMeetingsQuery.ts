import { firestore } from "../../../index";

export const getStudyParticipantMeetingsQuery = firestore.references.getMeetingsReference;
