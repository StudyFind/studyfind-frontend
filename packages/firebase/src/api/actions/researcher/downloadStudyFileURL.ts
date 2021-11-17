import firebase from "firebase";

export const downloadStudyFileURL = async (ref: firebase.storage.Reference): Promise<string> => {
  return ref.getDownloadURL();
};
