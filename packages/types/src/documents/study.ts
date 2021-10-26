import { Address, Email, Latitude, Longitude, Timestamp, UserID } from "../custom";

export type StudyLocation = {
  address: Address;
  coordinates: {
    latitude: Latitude;
    longitude: Longitude;
  };
};

export type StudyQuestionType = "Inclusion" | "Exclusion";
export type StudyQuestionWeight = "Critical" | "High" | "Medium" | "Low" | "Trivial" | "Optional";

export type StudyQuestion = {
  type: StudyQuestionType;
  weight: StudyQuestionWeight;
  prompt: string;
};

export type StudyResource = {
  name: string;
  link: URL;
};

export type StudySex = "All" | "Male" | "Female";
export type StudyType = "Observational" | "Interventional";

export interface StudyDocumentStructure {
  activated: boolean;
  title: string;
  description: string;
  sex: StudySex;

  minAge: number;
  maxAge: number;
  acceptsHealthyParticipants: boolean;
  acceptsRemoteParticipants: boolean;
  type: StudyType;

  researcher: {
    id: UserID;
    name: string;
    email: Email;
  };

  conditions: string[];

  locations: StudyLocation[];
  questions: StudyQuestion[];
  resources: StudyResource[];

  createdAt: Timestamp;
  updatedAt: Timestamp;
}
