import { firestore } from "../../config";
import { createDocument } from "../utils";
import { CreateMailingDocument } from "@studyfind/types";

export const createMailingDocument = (data: CreateMailingDocument) => {
  return createDocument(firestore.collection("mailing"), data);
};
