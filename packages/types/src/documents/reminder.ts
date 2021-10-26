import { Date, DocumentID, Timestamp, UserID, WeeklyOffset } from "../custom";

export interface ReminderDocumentStructure {
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
  confirmedByParticipant: boolean;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
