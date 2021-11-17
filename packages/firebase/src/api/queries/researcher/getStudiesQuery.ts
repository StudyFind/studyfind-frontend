import { auth, firestore } from "src";

export const getStudiesQuery = () => {
  // TODO: update based on more complex filters
  const researcherID = auth.getUser().uid;
  return firestore.references.getStudiesReference().where("researcher.id", "==", researcherID);
};
