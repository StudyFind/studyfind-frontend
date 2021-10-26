import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import {
  getStudyParticipantMeetingReference,
  getStudyParticipantMeetingsReference,
} from "../references";

import { CreateMeetingDocument, UpdateMeetingDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createMeetingDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateMeetingDocument
) => {
  return createDocument(getStudyParticipantMeetingsReference(studyID, participantID), data);
};

export const updateMeetingDocument = (
  studyID: string,
  participantID: string,
  meetingID: string,
  data: UpdateMeetingDocument
) => {
  return updateDocument(
    getStudyParticipantMeetingReference(studyID, participantID, meetingID),
    data
  );
};

export const deleteMeetingDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  meetingID: DocumentID
) => {
  return deleteDocument(getStudyParticipantMeetingReference(studyID, participantID, meetingID));
};
