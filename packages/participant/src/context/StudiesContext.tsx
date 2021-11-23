import { createContext } from "react";
import { StudyDocumentExtended } from "types/extended";

export const StudiesContext = createContext<StudyDocumentExtended[] | undefined>(undefined);
export const StudiesProvider = StudiesContext.Provider;
