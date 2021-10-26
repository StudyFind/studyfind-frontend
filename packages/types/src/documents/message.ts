import { Timestamp, UserID } from "../custom";

export interface MessageDocumentStructure {
  user: UserID;
  text: string;
  read: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
