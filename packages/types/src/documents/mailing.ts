import { Email, Timestamp, Side } from "../custom";

export interface MailingDocument {
  side: Side;
  email: Email;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateMailingDocument {
  side: Side;
  email: Email;
}
