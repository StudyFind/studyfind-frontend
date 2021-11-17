import { auth, firestore } from "../../../index";
import { UpdateParticipantDocument } from "@studyfind/types";

export const updateUserAccount = (data: UpdateParticipantDocument) => {
  const participantID = auth.getUser().uid;
  return firestore.mutations.updateParticipantDocument(participantID, data);
};
