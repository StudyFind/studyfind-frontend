import { auth, firestore } from "src";
import { datetime } from "@studyfind/utils";
import { Timezone } from "@studyfind/types";

interface UpdateTimezonePayload {
  region: Timezone;
}

export const updateUserTimezone = ({ region }: UpdateTimezonePayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.updateResearcherDocument(researcherID, {
    timezone: {
      region,
      updatedAt: datetime.getNow(),
    },
  });
};
