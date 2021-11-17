import { firestore } from "../../../index";

export const deleteNote = firestore.mutations.deleteNoteDocument;
