import { DocumentID, Timestamp, UserID } from "../custom";

export interface NoteDocument {
  title: string;
  body: string;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateNoteDocument {
  title: string;
  body: string;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
}

export interface UpdateNoteDocument {
  title?: string;
  body?: string;
}
