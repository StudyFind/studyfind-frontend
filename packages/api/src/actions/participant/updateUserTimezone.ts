import { auth, firestore } from "@studyfind/firebase";
import { datetime } from "@studyfind/utils";
import { Timezone } from "@studyfind/types";

interface UpdateUserTimezonePayload {
  region: Timezone;
  autodetect: boolean;
}

export const updateUserTimezone = ({ region, autodetect }: UpdateUserTimezonePayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateParticipantDocument(participantID, {
    timezone: {
      region,
      autodetect,
      updatedAt: datetime.getNow(),
    },
  });
};
