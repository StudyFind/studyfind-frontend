import { auth } from "../config";

export const sendAccountVerificationEmail = async () => {
  auth.currentUser?.sendEmailVerification();
};
