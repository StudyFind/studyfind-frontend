import { StudyDocumentExtended, StudyParticipantDocumentExtended } from "types/extended";

export type Action = "meetings" | "reminders" | "messages" | "questions";

export interface StudyFull extends StudyDocumentExtended {
  participant: StudyParticipantDocumentExtended;
}
