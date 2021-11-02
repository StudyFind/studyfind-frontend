import { auth } from "../config";

export const getUser = () => {
  return auth.currentUser;
};
