import { firestore } from "../../../index";

interface SubscribeMailingPayload {
  email: string;
}

export const subscribeMailing = async ({ email }: SubscribeMailingPayload) => {
  firestore.mutations.createMailingDocument({
    side: "RESEARCHER",
    email,
  });
};
