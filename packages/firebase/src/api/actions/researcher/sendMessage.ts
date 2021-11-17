import { auth, firestore } from "../../../index";
import { DocumentID } from "@studyfind/types";

interface SendMessagePayload {
  studyID: DocumentID;
  participantID: DocumentID;
  text: string;
}

export const sendMessage = async ({ studyID, participantID, text }: SendMessagePayload) => {
  firestore.mutations.createMessageDocument(studyID, participantID, {
    text,
    user: auth.getUser().uid,
    read: false,
  });
};
