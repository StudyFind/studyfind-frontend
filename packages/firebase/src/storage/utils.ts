import { storage } from "../config";

export const downloadFile = async (path: string) => {
  // TODO: download file
};

export const uploadFile = async (path: string, file: File) => {
  return storage.ref().child(path).put(file);
};

export const deleteFile = async (path: string) => {
  return storage.ref().child(path).delete();
};
