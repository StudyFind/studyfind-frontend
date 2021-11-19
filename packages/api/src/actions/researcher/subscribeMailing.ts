import { firestore } from "@studyfind/firebase";

interface SubscribeMailingPayload {
  email: string;
}

export const subscribeMailing = async ({ email }: SubscribeMailingPayload) => {
  firestore.mutations.createMailingDocument({
    side: "RESEARCHER",
    email,
  });
};
