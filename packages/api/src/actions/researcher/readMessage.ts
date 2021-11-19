import { firestore } from "@studyfind/firebase";
import { DocumentID } from "@studyfind/types";

interface ReadMessagePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  messageID: DocumentID;
}

export const readMessage = async ({ studyID, participantID, messageID }: ReadMessagePayload) => {
  return firestore.mutations.updateMessageDocument(studyID, participantID, messageID, {
    read: true,
  });
};
