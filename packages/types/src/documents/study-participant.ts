import { Timezone } from "../custom";
import { StudyQuestion } from "./study";

export type StudyParticipantStatus =
  | "interested"
  | "consented"
  | "screened"
  | "accepted"
  | "rejected";
export type StudyParticipantReponse = "Yes" | "No" | "Unsure";

export interface StudyParticipantDocumentStructure {
  status: StudyParticipantStatus;
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
  timezone: Timezone;
  availability: string;
}
