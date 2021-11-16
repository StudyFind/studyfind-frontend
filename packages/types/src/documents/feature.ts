import { Email, Timestamp } from "../custom";

export interface FeatureDocumentStructure {
  name: string;
  description: string;
  email: Email;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
