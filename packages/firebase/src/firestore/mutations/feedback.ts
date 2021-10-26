import { createDocument } from "../utils";
import { getFeedbackReference } from "../references";

import { CreateFeedbackDocument } from "@studyfind/types";

export const createFeedbackDocument = (data: CreateFeedbackDocument) => {
  return createDocument(getFeedbackReference(), data);
};
