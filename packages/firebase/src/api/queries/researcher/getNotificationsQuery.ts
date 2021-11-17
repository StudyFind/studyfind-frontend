import { auth, firestore } from "src";

export const getNotificationsQuery = () => {
  const researcherID = auth.getUser().uid;
  return firestore.references.getResearcherNotificationsReference(researcherID);
};
