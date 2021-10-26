import { DocumentID, Timestamp, URL, UserID } from "../custom";

export interface CreateMeetingDocument {
  name: string;
  link: URL;
  time: Timestamp;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
  confirmedByParticipant: false;
}

export interface UpdateMeetingDocument {
  name?: string;
  link?: URL;
  time?: Timestamp;
  confirmedByParticipant?: true;
}

// export type MeetingDocumentResearcherUpdate = {
//   name: string;
//   link: URL;
//   time: Timestamp;
// };

// export type MeetingDocumentParticipantUpdate = {
//   confirmedByParticipant: true;
// };

// export type UpdateMeetingDocument = MeetingDocumentResearcherUpdate | MeetingDocumentParticipantUpdate;
