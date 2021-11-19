import { auth, firestore } from "@studyfind/firebase";

export const getResearcherQuery = () => {
  const researcherID = auth.getUser().uid;
  return firestore.references.getResearcherReference(researcherID);
};
