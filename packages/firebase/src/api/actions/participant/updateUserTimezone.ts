import { auth, firestore } from "../../../index";
import { datetime } from "@studyfind/utils";
import { Timezone } from "@studyfind/types";

interface UpdateUserTimezonePayload {
  region: Timezone;
}

export const updateUserTimezone = ({ region }: UpdateUserTimezonePayload) => {
  const participantID = auth.getUser().uid;

  return firestore.mutations.updateParticipantDocument(participantID, {
    timezone: {
      region,
      updatedAt: datetime.getNow(),
    },
  });
};
