import { CommonNotificationDocument } from "../reused";

export interface ParticipantNotificationDocument extends CommonNotificationDocument {
  code:
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
    | "REMINDER_NOW";
}

export interface UpdateParticipantNotification {
  read?: true;
}
