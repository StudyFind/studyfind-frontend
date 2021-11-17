import { Date, DocumentID, Timestamp, UserID, WeeklyOffset } from "../custom";

export interface ReminderDocument {
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

export interface CreateReminderDocument {
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
  confirmedByParticipant: false;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
}

export type UpdateReminderDocument = {
  title?: string;
  times?: WeeklyOffset[];
  startDate?: Date;
  endDate?: Date;
  confirmedByParticipant?: true;
};
