import { Email, Timestamp, Side } from "../custom";

export interface FeatureDocument {
  side: Side;
  name: string;
  email: Email;
  description: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateFeatureDocument {
  side: Side;
  name: string;
  email: Email;
  description: string;
}
