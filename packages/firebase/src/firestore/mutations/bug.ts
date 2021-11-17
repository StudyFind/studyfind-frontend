import { createDocument } from "../utils";
import { getBugsReference } from "../references";

import { CreateBugDocument } from "@studyfind/types";

export const createBugDocument = (data: CreateBugDocument) => {
  return createDocument(getBugsReference(), data);
};
