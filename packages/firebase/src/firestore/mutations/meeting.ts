import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import { getMeetingReference, getMeetingsReference } from "../references";

import { DocumentID, CreateMeetingDocument, UpdateMeetingDocument } from "@studyfind/types";

export const createMeetingDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateMeetingDocument
) => {
  return createDocument(getMeetingsReference(studyID, participantID), data);
};

export const updateMeetingDocument = (
  studyID: string,
  participantID: string,
  meetingID: string,
  data: UpdateMeetingDocument
) => {
  return updateDocument(getMeetingReference(studyID, participantID, meetingID), data);
};

export const deleteMeetingDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  meetingID: DocumentID
) => {
  return deleteDocument(getMeetingReference(studyID, participantID, meetingID));
};
