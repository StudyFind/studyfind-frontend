import { auth } from "../config";

interface ChangePasswordPayload {
  password: string;
  newPassword: string;
}

export const changePassword = async ({ password, newPassword }: ChangePasswordPayload) => {
  const email = auth.currentUser?.email;
  const { user } = await auth.signInWithEmailAndPassword(email || "", password);

  user?.updatePassword(newPassword);
};
