import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import {
  ResearcherDocument,
  ParticipantDocument,
  ResearcherNotificationDocument,
  ParticipantNotificationDocument,
  StudyDocument,
  StudyParticipantDocument,
  NoteDocument,
  MessageDocument,
  MeetingDocument,
  ReminderDocument,
  MailingDocument,
  FeatureDocument,
  BugDocument,
} from "@studyfind/types";

export type Extended<T> = Data<T, "id", "ref">;

export type ResearcherDocumentExtended = Extended<ResearcherDocument>;
export type ParticipantDocumentExtended = Extended<ParticipantDocument>;
export type ResearcherNotificationDocumentExtended = Extended<ResearcherNotificationDocument>;
export type ParticipantNotificationDocumentExtended = Extended<ParticipantNotificationDocument>;
export type StudyDocumentExtended = Extended<StudyDocument>;
export type StudyParticipantDocumentExtended = Extended<StudyParticipantDocument>;
export type NoteDocumentExtended = Extended<NoteDocument>;
export type MessageDocumentExtended = Extended<MessageDocument>;
export type MeetingDocumentExtended = Extended<MeetingDocument>;
export type ReminderDocumentExtended = Extended<ReminderDocument>;
export type MailingDocumentExtended = Extended<MailingDocument>;
export type FeatureDocumentExtended = Extended<FeatureDocument>;
export type BugDocumentExtended = Extended<BugDocument>;
