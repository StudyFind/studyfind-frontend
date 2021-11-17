import { firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

interface EditNotePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  noteID: DocumentID;
  title: string;
  body: string;
}

export const editNote = async ({
  studyID,
  participantID,
  noteID,
  title,
  body,
}: EditNotePayload) => {
  return firestore.mutations.updateNoteDocument(studyID, participantID, noteID, {
    title,
    body,
  });
};
