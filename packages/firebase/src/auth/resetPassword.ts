import { auth } from "../config";

interface ResetPasswordPayload {
  code: string;
  newPassword: string;
}

export const resetPassword = async ({ code, newPassword }: ResetPasswordPayload) => {
  await auth.verifyPasswordResetCode(code);
  await auth.confirmPasswordReset(code, newPassword);
};
