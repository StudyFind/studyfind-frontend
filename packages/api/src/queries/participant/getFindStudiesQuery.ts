import { firestore } from "@studyfind/firebase";

export const getFindStudiesQuery = () => {
  return firestore.references.getStudiesReference().where("activated", "==", true);
};
