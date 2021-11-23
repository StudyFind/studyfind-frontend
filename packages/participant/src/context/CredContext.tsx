import { createContext } from "react";
import firebase from "firebase";

export const CredContext = createContext<firebase.User | undefined>(undefined);
export const CredProvider = CredContext.Provider;
