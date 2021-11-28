import { auth, firestore } from "@studyfind/firebase";

export const getDashboardQuery = () => {
  // TODO: update based on more complex filters
  const researcherID = auth.getUser().uid;
  return firestore.references.getStudiesReference().where("researcher.id", "==", researcherID);
};
