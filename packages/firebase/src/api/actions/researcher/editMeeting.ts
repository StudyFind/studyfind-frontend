import { firestore } from "../../../index";
import { DocumentID, Timestamp, URL } from "@studyfind/types";

interface EditMeetingPayload {
  studyID: DocumentID;
  participantID: DocumentID;
  meetingID: DocumentID;
  name: string;
  link: URL;
  time: Timestamp;
}

export const editMeeting = async ({
  studyID,
  participantID,
  meetingID,
  name,
  link,
  time,
}: EditMeetingPayload) => {
  return firestore.mutations.updateMeetingDocument(studyID, participantID, meetingID, {
    name,
    link,
    time,
  });
};
