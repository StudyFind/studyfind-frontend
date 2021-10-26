import { DocumentID, Timestamp, URL, UserID } from "../custom";

export interface MeetingDocumentResearcherFields {
  name: string;
  link: URL;
  time: Timestamp;
}

export interface MeetingDocumentParticipantFields {
  confirmedByParticipant: boolean;
}

export interface MeetingDocumentForeignKeys {
  participantID: UserID;
  researcherID: UserID;
  studyID: DocumentID;
}

export interface MeetingDocumentMetadata {
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface MeetingDocumentStructure
  extends MeetingDocumentResearcherFields,
    MeetingDocumentParticipantFields,
    MeetingDocumentForeignKeys,
    MeetingDocumentMetadata {}
