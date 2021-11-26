import { CommonNotificationDocument } from "../reused";

export type ResearcherNotificationDocumentCode =
  | "CREATE_ACCOUNT"
  | "DELETE_ACCOUNT"
  | "CREATE_STUDY"
  | "DELETE_STUDY"
  | "PARTICIPANT_ENROLLED"
  | "PARTICIPANT_LEFT"
  | "PARTICIPANT_CONFIRMED_MEETING"
  | "PARTICIPANT_CONFIRMED_REMINDER"
  | "MEETING_NOW"
  | "NEW_MESSAGE";

export interface ResearcherNotificationDocument extends CommonNotificationDocument {
  code: ResearcherNotificationDocumentCode;
}

export interface UpdateResearcherNotification {
  read?: true;
}
