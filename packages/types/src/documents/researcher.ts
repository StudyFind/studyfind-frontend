import { Phone, Timezone, Timestamp } from "../custom";

export interface ResearcherDocument {
  organization: string;
  background: string;
  phone: Phone;
  timezone: {
    region: Timezone;
    autodetect: boolean;
    updatedAt: Timestamp;
  };
  notifications: {
    local: boolean;
    email: boolean;
    phone: boolean;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateResearcherDocument {
  organization: "";
  background: "";
  phone: "";
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

export type UpdateResearcherDocument = {
  organization?: string;
  background?: string;
  phone?: Phone;
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
