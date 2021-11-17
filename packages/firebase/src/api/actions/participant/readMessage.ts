import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

interface ReadMessagePayload {
  studyID: DocumentID;
  messageID: DocumentID;
}

export const readMessage = async ({ studyID, messageID }: ReadMessagePayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateMessageDocument(studyID, participantID, messageID, {
    read: true,
  });
};
