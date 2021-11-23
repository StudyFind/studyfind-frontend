import { Grid } from "@chakra-ui/react";
import { MeetingDocumentExtended } from "types/extended";

import MeetingsCard from "./MeetingsCard";
import MeetingsEmpty from "./MeetingsEmpty";

interface Props {
  meetings: MeetingDocumentExtended[];
  handleConfirm: (meeting: MeetingDocumentExtended) => void;
}

function MeetingsView({ meetings, handleConfirm }: Props) {
  return meetings?.length ? (
    <Grid gap="15px" padding="15px">
      {meetings.map((meeting) => (
        <MeetingsCard
          key={meeting.id}
          meeting={meeting}
          handleConfirm={() => handleConfirm(meeting)}
        />
      ))}
    </Grid>
  ) : (
    <MeetingsEmpty />
  );
}

export default MeetingsView;
