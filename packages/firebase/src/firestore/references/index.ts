import { firestore } from "../../config";
import { DocumentID } from "@studyfind/types";

enum COLLECTION_KEYS {
  participants = "participants",
  researchers = "researchers",
  notifications = "notifications",
  studies = "studies",
  notes = "notes",
  meetings = "meetings",
  reminders = "reminders",
  messages = "messages",
  feature = "feature",
  bug = "bug",
  mailing = "mailing",
}

// PARTICIPANTS
export const getParticipantsReference = () => {
  return firestore.collection(COLLECTION_KEYS.participants);
};

// PARTICIPANT
export const getParticipantReference = (participantID: DocumentID) => {
  return firestore.collection(COLLECTION_KEYS.participants).doc(participantID);
};

// RESEARCHER NOTIFICATIONS
export const getResearcherNotificationsReference = (researcherID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.researchers)
    .doc(researcherID)
    .collection(COLLECTION_KEYS.notifications);
};

// RESEARCHER NOTIFICATION
export const getResearcherNotificationReference = (
  researcherID: DocumentID,
  notificationID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.researchers)
    .doc(researcherID)
    .collection(COLLECTION_KEYS.notifications)
    .doc(notificationID);
};

// PARTICIPANT NOTIFICATIONS
export const getParticipantNotificationsReference = (participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.notifications);
};

// PARTICIPANT NOTIFICATION
export const getParticipantNotificationReference = (
  participantID: DocumentID,
  notificationID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.notifications)
    .doc(notificationID);
};

// RESEARCHERS
export const getResearchersReference = () => {
  return firestore.collection(COLLECTION_KEYS.researchers);
};

// RESEARCHER
export const getResearcherReference = (researcherID: DocumentID) => {
  return firestore.collection(COLLECTION_KEYS.researchers).doc(researcherID);
};

// STUDIES
export const getStudiesReference = () => {
  return firestore.collection(COLLECTION_KEYS.studies);
};

// STUDY
export const getStudyReference = (studyID: DocumentID) => {
  return firestore.collection(COLLECTION_KEYS.studies).doc(studyID);
};

// STUDY PARTICIPANTS
export const getStudyParticipantsReference = (studyID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants);
};

// STUDY PARTICIPANT
export const getStudyParticipantReference = (studyID: DocumentID, participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID);
};

// STUDY PARTICIPANT NOTES
export const getStudyParticipantNotesReference = (
  studyID: DocumentID,
  participantID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.notes);
};

// STUDY PARTICIPANT NOTE
export const getStudyParticipantNoteReference = (
  studyID: DocumentID,
  participantID: DocumentID,
  noteID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.notes)
    .doc(noteID);
};

// STUDY PARTICIPANT MEETINGS
export const getStudyParticipantMeetingsReference = (
  studyID: DocumentID,
  participantID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.meetings);
};

// STUDY PARTICIPANT MEETING
export const getStudyParticipantMeetingReference = (
  studyID: DocumentID,
  participantID: DocumentID,
  meetingID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.meetings)
    .doc(meetingID);
};

// STUDY PARTICIPANT REMINDERS
export const getStudyParticipantRemindersReference = (
  studyID: DocumentID,
  participantID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.reminders);
};

// STUDY PARTICIPANT REMINDER
export const getStudyParticipantReminderReference = (
  studyID: DocumentID,
  participantID: DocumentID,
  reminderID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.reminders)
    .doc(reminderID);
};

// STUDY PARTICIPANT MESSAGES
export const getStudyParticipantMessagesReference = (
  studyID: DocumentID,
  participantID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.messages);
};

// STUDY PARTICIPANT MESSAGE
export const getStudyParticipantMessageReference = (
  studyID: DocumentID,
  participantID: DocumentID,
  messageID: DocumentID
) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.messages)
    .doc(messageID);
};

// FEEDBACK - not accessible on the frontend - for internal use only
export const getFeatureReference = () => {
  return firestore.collection(COLLECTION_KEYS.feature);
};

export const getBugReference = () => {
  return firestore.collection(COLLECTION_KEYS.bug);
};

// MAILING - not accessible on the frontend - for internal use only
export const getMailingReference = () => {
  return firestore.collection(COLLECTION_KEYS.mailing);
};
