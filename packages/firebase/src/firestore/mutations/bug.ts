import { createDocument } from "../utils";
import { getBugReference } from "../references";

import { CreateBugDocument } from "@studyfind/types";

export const createBugDocument = (data: CreateBugDocument) => {
  return createDocument(getBugReference(), data);
};
