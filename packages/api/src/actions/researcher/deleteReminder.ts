import { firestore } from "@studyfind/firebase";

export const deleteReminder = firestore.mutations.deleteReminderDocument;
