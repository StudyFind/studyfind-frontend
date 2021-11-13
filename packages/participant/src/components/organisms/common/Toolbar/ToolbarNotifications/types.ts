import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import { NotificationDocumentStructure as NotificationDocument } from "types/side";

export type NotificationDocumentStructure = NotificationDocument;
export type NotificationDocumentStructureExtended = Data<NotificationDocument, "id", "ref">;
