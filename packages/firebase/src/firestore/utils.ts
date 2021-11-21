import firebase from "firebase";
import * as moment from "moment-timezone";

export const getNow = () => {
  return moment().utc().valueOf();
};

export const guessTimezone = () => {
  return moment.tz.guess();
};

// POST
export const createDocument = (query: firebase.firestore.CollectionReference, data: any) => {
  const now = getNow();

  return query.add({
    ...data,
    createdAt: now,
    updatedAt: now,
  });
};

// PUT
export const setDocument = (query: firebase.firestore.DocumentReference, data: any) => {
  const now = getNow();

  return query.set({
    ...data,
    createdAt: now,
    updatedAt: now,
  });
};

// PATCH
export const updateDocument = async (query: firebase.firestore.DocumentReference, data: any) => {
  const now = getNow();

  return query.update({
    ...data,
    updatedAt: now,
  });
};

// DELETE
export const deleteDocument = (query: firebase.firestore.DocumentReference) => {
  return query.delete();
};
