import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

interface EditNotePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  noteID: DocumentID;
  title: string;
  body: string;
}

export const writeNote = async ({ studyID, participantID, title, body }: EditNotePayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.createNoteDocument(studyID, participantID, {
    title,
    body,
    studyID,
    participantID,
    researcherID,
  });
};
