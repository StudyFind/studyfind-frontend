import { auth, firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

interface SendMessagePayload {
  studyID: DocumentID;
  text: string;
}

export const sendMessage = async ({ studyID, text }: SendMessagePayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.createMessageDocument(studyID, participantID, {
    text,
    user: participantID,
    read: false,
  });
};
