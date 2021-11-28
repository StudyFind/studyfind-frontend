import { CommonNotificationDocument } from "../reused";

export type ParticipantNotificationDocumentCode =
  | "CREATE_ACCOUNT"
  | "DELETE_ACCOUNT"
  | "RESEARCHER_SENT_MESSAGE"
  | "RESEARCHER_CREATED_MEETING"
  | "RESEARCHER_UPDATED_MEETING"
  | "RESEARCHER_DELETED_MEETING"
  | "RESEARCHER_CREATED_REMINDER"
  | "RESEARCHER_UPDATED_REMINDER"
  | "RESEARCHER_DELETED_REMINDER"
  | "RESEARCHER_CHANGED_PARTICIPANT_STATUS"
  | "MEETING_NOW"
  | "REMINDER_NOW"
  | "NEW_MESSAGE";

export interface ParticipantNotificationDocument extends CommonNotificationDocument {
  code: ParticipantNotificationDocumentCode;
}

export interface UpdateParticipantNotification {
  read?: true;
}
