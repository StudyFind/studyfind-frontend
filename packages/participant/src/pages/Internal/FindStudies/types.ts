import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import { StudyDocument } from "@studyfind/types";

export type StudyDocumentExtended = Data<StudyDocument, "id", "ref">;

export interface Filters {
  search: string;
  control: boolean;
  observational: boolean;
  interventional: boolean;
  hideEnrolled: boolean;
  hideSaved: boolean;
  onlySaved: boolean;
  acceptsHealthyParticipants: boolean;
  acceptsRemoteParticipants: boolean;
  conditions: string[];
}
