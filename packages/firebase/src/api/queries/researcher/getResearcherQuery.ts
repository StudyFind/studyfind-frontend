import { auth, firestore } from "../../../index";

export const getResearcherQuery = () => {
  const researcherID = auth.getUser().uid;
  return firestore.references.getResearcherReference(researcherID);
};
