import { createDocument } from "../utils";
import { updateDocument } from "../utils";
import { deleteDocument } from "../utils";

import {
  getStudyParticipantReminderReference,
  getStudyParticipantRemindersReference,
} from "../references";

import { CreateReminderDocument, UpdateReminderDocument } from "@studyfind/types";
import { DocumentID } from "@studyfind/types";

export const createReminderDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  data: CreateReminderDocument
) => {
  return createDocument(getStudyParticipantRemindersReference(studyID, participantID), data);
};

export const updateReminderDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  reminderID: DocumentID,
  data: UpdateReminderDocument
) => {
  return updateDocument(
    getStudyParticipantReminderReference(studyID, participantID, reminderID),
    data
  );
};

export const deleteReminderDocument = (
  studyID: DocumentID,
  participantID: DocumentID,
  reminderID: DocumentID
) => {
  return deleteDocument(getStudyParticipantReminderReference(studyID, participantID, reminderID));
};
