import { auth, firestore } from "@studyfind/firebase";

export const getNotificationsQuery = () => {
  const researcherID = auth.getUser().uid;
  return firestore.references
    .getResearcherNotificationsReference(researcherID)
    .orderBy("createdAt", "desc");
};
