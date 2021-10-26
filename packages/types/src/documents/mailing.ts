import { Email, Timestamp, UserType } from "../custom";

export interface MailingDocumentStructure {
  side: UserType;
  email: Email;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
