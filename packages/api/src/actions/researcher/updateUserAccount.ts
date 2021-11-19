import { auth, firestore } from "@studyfind/firebase";
import { UpdateResearcherDocument } from "@studyfind/types";

export const updateUserAccount = (data: UpdateResearcherDocument) => {
  const researcherID = auth.getUser().uid;
  return firestore.mutations.updateResearcherDocument(researcherID, data);
};
