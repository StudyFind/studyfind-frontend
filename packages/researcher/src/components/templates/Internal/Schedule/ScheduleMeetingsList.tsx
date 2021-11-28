import { SimpleGrid } from "@chakra-ui/react";

import { MeetingDocumentExtended } from "types/extended";

import ScheduleMeetingsItemParticipant from "./ScheduleMeetingsItemParticipant";
import ScheduleMeetingsItemResearcher from "./ScheduleMeetingsItemResearcher";

interface Props {
  meetings: MeetingDocumentExtended[];
}

function ScheduleMeetingsList({ meetings }: Props) {
  const handleConfirm = (meeting: MeetingDocumentExtended) => {
    return Promise.resolve(); // TODO: Confirm meeting
  };

  const handleDelete = (meeting: MeetingDocumentExtended) => {
    return Promise.resolve(); // TODO: Delete meeting
  };

  const ScheduleMeetingItem = ({ meeting }: { meeting: MeetingDocumentExtended }) => {
    return process.env.REACT_APP_SIDE === "RESEARCHER" ? (
      <ScheduleMeetingsItemResearcher
        meeting={meeting}
        handleDelete={() => handleDelete(meeting)}
      />
    ) : (
      <ScheduleMeetingsItemParticipant
        meeting={meeting}
        handleConfirm={() => handleConfirm(meeting)}
      />
    );
  };

  return (
    <SimpleGrid spacing="10px" paddingY="10px">
      {meetings.map((meeting) => (
        <ScheduleMeetingItem key={meeting.id} meeting={meeting} />
      ))}
    </SimpleGrid>
  );
}

export default ScheduleMeetingsList;
