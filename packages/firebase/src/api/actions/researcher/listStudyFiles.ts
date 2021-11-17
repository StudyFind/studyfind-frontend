import firebase from "firebase";

import { storage } from "src";
import { DocumentID } from "@studyfind/types";

interface FileData {
  ref: firebase.storage.Reference;
  name: string;
  time: string;
}

export const listStudyFiles = async (studyID: DocumentID): Promise<FileData[]> => {
  const { items } = await storage.listFiles(`study/${studyID}`);

  return Promise.all(
    items.map(async (ref) => {
      const meta = await ref.getMetadata();

      return {
        ref,
        name: ref.name,
        time: meta.timeCreated,
      };
    })
  );
};
