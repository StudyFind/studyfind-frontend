import { DocumentID, UserID } from "../custom";
import { NoteDocumentStructure } from "../documents/note";

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
