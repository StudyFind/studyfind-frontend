import { firestore } from "@studyfind/firebase";

export const deleteStudy = firestore.mutations.deleteStudyDocument;
