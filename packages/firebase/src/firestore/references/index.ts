import firebase from "firebase";

import { firestore } from "../../config";
import {
  DocumentID,
  BugDocument,
  FeatureDocument,
  MailingDocument,
  MeetingDocument,
  MessageDocument,
  NoteDocument,
  ParticipantDocument,
  ParticipantNotificationDocument,
  ReminderDocument,
  ResearcherDocument,
  ResearcherNotificationDocument,
  StudyDocument,
  StudyParticipantDocument,
} from "@studyfind/types";

type DocumentReference<T> = firebase.firestore.DocumentReference<T>;
type CollectionReference<T> = firebase.firestore.CollectionReference<T>;

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
  return firestore.collection(
    COLLECTION_KEYS.participants
  ) as CollectionReference<ParticipantDocument>;
};

// PARTICIPANT
export const getParticipantReference = (participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID) as DocumentReference<ParticipantDocument>;
};

// RESEARCHERS
export const getResearchersReference = () => {
  return firestore.collection(
    COLLECTION_KEYS.researchers
  ) as CollectionReference<ResearcherDocument>;
};

// RESEARCHER
export const getResearcherReference = (researcherID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.researchers)
    .doc(researcherID) as DocumentReference<ResearcherDocument>;
};

// PARTICIPANT NOTIFICATIONS
export const getParticipantNotificationsReference = (participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(
      COLLECTION_KEYS.notifications
    ) as CollectionReference<ParticipantNotificationDocument>;
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
    .doc(notificationID) as DocumentReference<ParticipantNotificationDocument>;
};

// RESEARCHER NOTIFICATIONS
export const getResearcherNotificationsReference = (researcherID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.researchers)
    .doc(researcherID)
    .collection(
      COLLECTION_KEYS.notifications
    ) as CollectionReference<ResearcherNotificationDocument>;
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
    .doc(notificationID) as DocumentReference<ResearcherNotificationDocument>;
};

// STUDIES
export const getStudiesReference = () => {
  return firestore.collection(COLLECTION_KEYS.studies) as CollectionReference<StudyDocument>;
};

// STUDY
export const getStudyReference = (studyID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID) as DocumentReference<StudyDocument>;
};

// STUDY PARTICIPANTS
export const getStudyParticipantsReference = (studyID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants) as CollectionReference<Document>;
};

// STUDY PARTICIPANT
export const getStudyParticipantReference = (studyID: DocumentID, participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID) as DocumentReference<Document>;
};

// STUDY PARTICIPANT NOTES
export const getNotesReference = (studyID: DocumentID, participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.notes) as CollectionReference<NoteDocument>;
};

// STUDY PARTICIPANT NOTE
export const getNoteReference = (
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
    .doc(noteID) as DocumentReference<NoteDocument>;
};

// STUDY PARTICIPANT MEETINGS
export const getMeetingsReference = (studyID: DocumentID, participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.meetings) as CollectionReference<MeetingDocument>;
};

// STUDY PARTICIPANT MEETING
export const getMeetingReference = (
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
    .doc(meetingID) as DocumentReference<MeetingDocument>;
};

// STUDY PARTICIPANT REMINDERS
export const getRemindersReference = (studyID: DocumentID, participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.reminders) as CollectionReference<ReminderDocument>;
};

// STUDY PARTICIPANT REMINDER
export const getReminderReference = (
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
    .doc(reminderID) as DocumentReference<ReminderDocument>;
};

// STUDY PARTICIPANT MESSAGES
export const getMessagesReference = (studyID: DocumentID, participantID: DocumentID) => {
  return firestore
    .collection(COLLECTION_KEYS.studies)
    .doc(studyID)
    .collection(COLLECTION_KEYS.participants)
    .doc(participantID)
    .collection(COLLECTION_KEYS.messages) as CollectionReference<MessageDocument>;
};

// STUDY PARTICIPANT MESSAGE
export const getMessageReference = (
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
    .doc(messageID) as DocumentReference<MessageDocument>;
};

// FEATURE - not accessible on the frontend - for internal use only
export const getFeaturesReference = () => {
  return firestore.collection(COLLECTION_KEYS.feature) as CollectionReference<FeatureDocument>;
};

// BUG - not accessible on the frontend - for internal use only
export const getBugsReference = () => {
  return firestore.collection(COLLECTION_KEYS.bug) as CollectionReference<BugDocument>;
};

// MAILING - not accessible on the frontend - for internal use only
export const getMailingReference = () => {
  return firestore.collection(COLLECTION_KEYS.mailing) as CollectionReference<MailingDocument>;
};
