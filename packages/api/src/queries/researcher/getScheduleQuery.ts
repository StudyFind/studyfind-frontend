import firebase from "firebase";
import { auth, services } from "@studyfind/firebase";
import { MeetingDocument } from "@studyfind/types";

export const getScheduleQuery = (start: number, end: number) => {
  const researcherID = auth.getUser().uid;

  return services.firestore
    .collectionGroup("meetings")
    .where("researcherID", "==", researcherID)
    .where("time", ">=", start)
    .where("time", "<=", end)
    .orderBy("time", "asc") as firebase.firestore.Query<MeetingDocument>;
};
