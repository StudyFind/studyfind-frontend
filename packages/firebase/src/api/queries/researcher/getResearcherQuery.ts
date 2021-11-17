import { auth, firestore } from "src";

export const getResearcherQuery = () => {
  const researcherID = auth.getUser().uid;
  return firestore.references.getResearcherReference(researcherID);
};
