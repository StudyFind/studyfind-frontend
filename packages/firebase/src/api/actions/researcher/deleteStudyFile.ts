import { storage } from "src";
import { DocumentID } from "@studyfind/types";

export const deleteStudyFile = async (studyID: DocumentID, name: string) => {
  return storage.deleteFile(`study/${studyID}/${name}`);
};
