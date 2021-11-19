import { firestore } from "@studyfind/firebase";

export const deleteNote = firestore.mutations.deleteNoteDocument;
