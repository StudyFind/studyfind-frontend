import firebase from "firebase";
import { auth, services } from "@studyfind/firebase";
import { MeetingDocument } from "@studyfind/types";

export const getScheduleQuery = () => {
  const participantID = auth.getUser().uid;

  return services.firestore
    .collectionGroup("meetings")
    .where("participantID", "==", participantID) as firebase.firestore.Query<MeetingDocument>;
};
