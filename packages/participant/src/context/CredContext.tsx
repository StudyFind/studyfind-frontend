import { createContext } from "react";
import firebase from "firebase";

export const CredContext = createContext<firebase.User>({} as firebase.User);
export const CredProvider = CredContext.Provider;
