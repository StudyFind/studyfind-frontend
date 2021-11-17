import { storage } from "src";
import { DocumentID } from "@studyfind/types";

export const uploadStudyFile = (studyID: DocumentID, name: string, file: File) => {
  return storage.uploadFile(`study/${studyID}/${name}`, file);
};
