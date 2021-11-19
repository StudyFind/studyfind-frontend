import { auth, firestore } from "@studyfind/firebase";
import { Email } from "@studyfind/types";

interface SubmitFeaturePayload {
  name: string;
  description: string;
  email: Email;
}

export const submitFeature = async ({ name, description }: SubmitFeaturePayload) => {
  const email = auth.getUser().email;

  return firestore.mutations.createFeatureDocument({
    name,
    description,
    email,
    side: "PARTICIPANT",
  });
};
