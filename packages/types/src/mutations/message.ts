import { UserID } from "../custom";

export interface CreateMessageDocument {
  user: UserID;
  text: string;
  read: false;
}

export interface UpdateMessageDocument {
  read?: true;
}
