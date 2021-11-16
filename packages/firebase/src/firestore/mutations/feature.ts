import { createDocument } from "../utils";
import { getFeatureReference } from "../references";

import { CreateFeatureDocument } from "@studyfind/types";

export const createFeatureDocument = (data: CreateFeatureDocument) => {
  return createDocument(getFeatureReference(), data);
};
