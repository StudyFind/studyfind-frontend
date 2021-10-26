import { Date, DocumentID, UserID, WeeklyOffset } from "../custom";

export interface CreateReminderDocument {
  title: string;
  times: WeeklyOffset[];
  startDate: Date;
  endDate: Date;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
  confirmedByParticipant: false;
}

export type UpdateReminderDocument = {
  title?: string;
  times?: WeeklyOffset[];
  startDate?: Date;
  endDate?: Date;
  confirmedByParticipant?: true;
};

// export type UpdateReminderDocument =
//   | {
//       title: string;
//       times: WeeklyOffset[];
//       startDate: Date;
//       endDate: Date;
//       confirmedByParticipant: true;
//     }
//   | {
//       confirmedByParticipant: true;
//     };
