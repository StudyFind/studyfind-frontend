import { firestore } from "../../../index";

export const getFindStudiesQuery = () => {
  return firestore.references.getStudiesReference().where("activated", "==", true);
};
