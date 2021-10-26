import { auth } from "../config";

import { setDoesUserExist } from "./utils";

interface DeleteAccountPayload {
  email: string;
  password: string;
}

export const deleteAccount = async ({ email, password }: DeleteAccountPayload) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);

  // await mutator(user?.uid).delete();
  await user?.delete();

  setDoesUserExist("No");
};
