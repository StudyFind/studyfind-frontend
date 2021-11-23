import { storage } from "../config";

export const downloadFile = async (path: string) => {
  return storage.ref(path).getDownloadURL();
};

export const uploadFile = (path: string, file: File) => {
  return storage.ref(path).put(file);
};

export const deleteFile = async (path: string) => {
  return storage.ref(path).delete();
};

export const listFiles = async (path: string) => {
  return storage.ref(path).listAll();
};
