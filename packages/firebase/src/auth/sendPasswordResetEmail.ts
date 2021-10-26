import { auth } from "../config";

interface SendPasswordResetEmailPayload {
  email: string;
}

export const sendPasswordResetEmail = async ({ email }: SendPasswordResetEmailPayload) => {
  auth.sendPasswordResetEmail(email);
};
