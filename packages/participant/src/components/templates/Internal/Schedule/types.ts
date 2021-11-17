import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import { MeetingDocument } from "@studyfind/types";

export type MeetingDocumentExtended = Data<MeetingDocument, "id", "ref">;
