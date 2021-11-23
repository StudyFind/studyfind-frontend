import firebase from "firebase";

export interface CustomFile {
  ref: firebase.storage.Reference;
  name: string;
  date: string;
}
