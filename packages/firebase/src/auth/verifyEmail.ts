import { auth } from "../config";

interface VerifyEmailPayload {
  code: string;
}

export const verifyEmail = async ({ code }: VerifyEmailPayload) => {
  return auth.applyActionCode(code);
};
