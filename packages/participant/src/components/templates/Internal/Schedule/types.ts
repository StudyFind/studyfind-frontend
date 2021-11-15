import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import { MeetingDocumentStructure } from "@studyfind/types";

export type MeetingDocumentStructureExtended = Data<MeetingDocumentStructure, "id", "ref">;
