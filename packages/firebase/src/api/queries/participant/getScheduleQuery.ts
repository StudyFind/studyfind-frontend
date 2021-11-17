import firebase from "firebase";
import { auth, services } from "src";
import { MeetingDocumentStructure } from "@studyfind/types";

export const getScheduleQuery = () => {
  const participantID = auth.getUser().uid;

  return services.firestore
    .collectionGroup("meetings")
    .where(
      "participantID",
      "==",
      participantID
    ) as firebase.firestore.Query<MeetingDocumentStructure>;
};
