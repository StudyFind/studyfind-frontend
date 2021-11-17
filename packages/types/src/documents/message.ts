import { Timestamp, UserID } from "../custom";

export interface MessageDocument {
  user: UserID;
  text: string;
  read: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateMessageDocument {
  user: UserID;
  text: string;
  read: false;
}

export interface UpdateMessageDocument {
  read?: true;
}
