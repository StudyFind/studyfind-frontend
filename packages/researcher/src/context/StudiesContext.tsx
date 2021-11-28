import { createContext } from "react";
import { StudyDocumentExtended } from "types/extended";

export const StudiesContext = createContext<StudyDocumentExtended[]>([] as StudyDocumentExtended[]);
export const StudiesProvider = StudiesContext.Provider;
