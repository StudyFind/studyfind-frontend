import { createContext } from "react";
import { UserDocumentExtended } from "types/side";

export const UserContext = createContext<UserDocumentExtended | undefined>(undefined);
export const UserProvider = UserContext.Provider;
