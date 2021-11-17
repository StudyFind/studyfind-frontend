import { Date, DocumentID, Phone, Timezone, Timestamp } from "../custom";

export type BiologicalSex = "" | "Male" | "Female";

export interface ParticipantDocument {
  sex: BiologicalSex;
  birthdate: Date;
  availability: string;
  phone: Phone;
  enrolled: DocumentID[];
  saved: DocumentID[];
  timezone: {
    region: Timezone;
    autodetect: true;
    updatedAt: Timestamp;
  };
  notifications: {
    local: true;
    email: false;
    phone: false;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateParticipantDocument {
  sex: "";
  birthdate: "";
  availability: "";
  phone: "";
  enrolled: [];
  saved: [];
  timezone: {
    region: Timezone;
    autodetect: true;
    updatedAt: Timestamp;
  };
  notifications: {
    local: true;
    email: false;
    phone: false;
  };
}

export type UpdateParticipantDocument = {
  sex?: BiologicalSex;
  birthdate?: Date;
  availability?: string;
  phone?: Phone;
  enrolled?: any;
  saved?: any;
  timezone?: {
    region?: Timezone;
    autodetect?: boolean;
    updatedAt?: Timestamp;
  };
  notifications?: {
    local?: boolean;
    email?: boolean;
    phone?: boolean;
  };
};
