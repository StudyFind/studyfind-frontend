import { DocumentID, Timestamp, URL, UserID } from "../custom";

export interface MeetingDocument {
  name: string;
  link: URL;
  time: Timestamp;
  confirmedByParticipant: boolean;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateMeetingDocument {
  name: string;
  link: URL;
  time: Timestamp;
  confirmedByParticipant: false;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
}

export interface UpdateMeetingDocument {
  name?: string;
  link?: URL;
  time?: Timestamp;
  confirmedByParticipant?: true;
}
