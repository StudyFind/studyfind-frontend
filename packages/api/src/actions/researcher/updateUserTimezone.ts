import { auth, firestore } from "@studyfind/firebase";
import { datetime } from "@studyfind/utils";
import { Timezone } from "@studyfind/types";

interface UpdateTimezonePayload {
  region: Timezone;
  autodetect: boolean;
}

export const updateUserTimezone = ({ region, autodetect }: UpdateTimezonePayload) => {
  const researcherID = auth.getUser().uid;

  firestore.mutations.updateResearcherDocument(researcherID, {
    timezone: {
      region,
      autodetect,
      updatedAt: datetime.getNow(),
    },
  });
};
