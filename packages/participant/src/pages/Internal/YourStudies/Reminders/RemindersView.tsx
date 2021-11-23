import { Grid } from "@chakra-ui/react";

import { ReminderDocumentExtended } from "types/extended";

import RemindersEmpty from "./RemindersEmpty";
import RemindersCard from "./RemindersCard";

interface Props {
  reminders: ReminderDocumentExtended[];
  handleConfirm: (reminder: ReminderDocumentExtended) => void;
}

function RemindersView({ reminders, handleConfirm }: Props) {
  return reminders?.length ? (
    <Grid gap="15px" padding="15px">
      {reminders.map((reminder, i) => (
        <RemindersCard key={i} reminder={reminder} handleConfirm={() => handleConfirm(reminder)} />
      ))}
    </Grid>
  ) : (
    <RemindersEmpty />
  );
}

export default RemindersView;
