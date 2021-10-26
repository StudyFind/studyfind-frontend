import { CommonNotificationDocumentStructure } from "../reused";

export interface ResearcherNotificationDocumentStructure
  extends CommonNotificationDocumentStructure {
  code:
    | "CREATE_ACCOUNT"
    | "DELETE_ACCOUNT"
    | "CREATE_STUDY"
    | "DELETE_STUDY"
    | "PARTICIPANT_ENROLLED"
    | "PARTICIPANT_CONFIRMED_MEETING"
    | "PARTICIPANT_CONFIRMED_REMINDER"
    | "MEETING_NOW";
}
