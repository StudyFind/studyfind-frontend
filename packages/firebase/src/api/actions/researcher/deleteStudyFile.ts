import { storage } from "../../../index";
import { DocumentID } from "@studyfind/types";

export const deleteStudyFile = async (studyID: DocumentID, name: string) => {
  return storage.deleteFile(`study/${studyID}/${name}`);
};
