import { firestore } from "@studyfind/firebase";

interface SubscribeMailingPayload {
  email: string;
}

export const subscribeMailing = async ({ email }: SubscribeMailingPayload) => {
  return firestore.mutations.createMailingDocument({
    side: "PARTICIPANT",
    email,
  });
};
