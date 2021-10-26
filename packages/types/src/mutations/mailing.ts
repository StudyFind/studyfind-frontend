import { Email, UserType } from "../custom";

export interface CreateMailingDocument {
  side: UserType;
  email: Email;
}
