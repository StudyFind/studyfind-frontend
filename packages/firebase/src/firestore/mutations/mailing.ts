import { createDocument } from "../utils";
import { getMailingReference } from "../references";

import { CreateMailingDocument } from "@studyfind/types";

export const createMailingDocument = (data: CreateMailingDocument) => {
  return createDocument(getMailingReference(), data);
};
