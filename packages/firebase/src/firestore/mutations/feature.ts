import { createDocument } from "../utils";
import { getFeaturesReference } from "../references";

import { CreateFeatureDocument } from "@studyfind/types";

export const createFeatureDocument = (data: CreateFeatureDocument) => {
  return createDocument(getFeaturesReference(), data);
};
