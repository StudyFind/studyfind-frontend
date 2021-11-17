import { Data } from "react-firebase-hooks/firestore/dist/firestore/types";
import { NotificationDocument as NotificationDocumentTemp } from "types/side";

export type NotificationDocument = NotificationDocumentTemp;
export type NotificationDocumentExtended = Data<NotificationDocument, "id", "ref">;
