import { auth } from "../config";

export const signout = async () => {
  return auth.signOut();
};
