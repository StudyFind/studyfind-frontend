import { auth, firestore } from "../../../index";

export const getNotificationsQuery = () => {
  const researcherID = auth.getUser().uid;
  return firestore.references.getResearcherNotificationsReference(researcherID);
};
