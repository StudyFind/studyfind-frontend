import { firestore } from "src";

export const getFindStudiesQuery = () => {
  return firestore.references.getStudiesReference().where("activated", "==", true);
};
