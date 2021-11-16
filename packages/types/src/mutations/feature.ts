import { Email, Timestamp } from "../custom";

export interface CreateFeatureDocument {
  name: string;
  description: string;
  email: Email;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
