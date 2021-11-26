import { createContext } from "react";
import { UserDocumentExtended } from "types/side";

export const UserContext = createContext<UserDocumentExtended>({} as UserDocumentExtended);
export const UserProvider = UserContext.Provider;
