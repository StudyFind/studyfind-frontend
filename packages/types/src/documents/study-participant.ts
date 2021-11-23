import { Timezone } from "../custom";
import { StudyQuestion } from "./study";

export type StudyParticipantStatus =
  | "interested"
  | "consented"
  | "screened"
  | "accepted"
  | "rejected";

export type StudyParticipantReponse = "Yes" | "No" | "Unsure" | "";

export interface StudyParticipantDocument {
  status: StudyParticipantStatus;
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
  timezone: Timezone;
  availability: string;
}

export interface CreateStudyParticipantDocument {
  status: "interested";
  questions: StudyQuestion[];
  responses: StudyParticipantReponse[];
  timezone: Timezone;
  availability: string;
}

export interface UpdateStudyParticipantDocument {
  status?: StudyParticipantStatus;
}
