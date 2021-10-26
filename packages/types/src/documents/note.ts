import { DocumentID, Timestamp, UserID } from "../custom";

export interface NoteDocumentStructure {
  title: string;
  body: string;
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
