import { useDevice } from "hooks";

import { datetime } from "@studyfind/utils";

import { Flex, Text } from "@chakra-ui/react";
import { FaPencilAlt, FaPhone, FaTrashAlt } from "react-icons/fa";
import { Card, Hint, Link, ActionButton } from "components/atoms";
import { MeetingDocumentExtended } from "./types";

interface Props {
  meeting: MeetingDocumentExtended;
  handleDelete: () => Promise<void>;
}

function ScheduleMeetingsItemResearcher({ meeting, handleDelete }: Props) {
  const { isPhone } = useDevice();

  const MEETING_INFO = (
    <>
      <Text>
        Meeting Status: <b>{meeting.confirmedByParticipant ? "Confirmed" : "Pending"}</b>
      </Text>
      <Text>
        Study ID: <b>{meeting.studyID}</b>
      </Text>
      <Text>
        Participant ID: <b>{meeting.participantID}</b>
      </Text>
    </>
  );

  return (
    <Card display="flex" gridGap="8px" padding="10px 12px" align="center">
      <Flex
        direction={isPhone ? "column-reverse" : "row"}
        align={isPhone ? "flex-start" : "center"}
      >
        <Flex>
          <Text
            fontSize="0.9rem"
            color="gray.500"
            width={isPhone ? "" : "64px"}
            textAlign={isPhone ? "left" : "right"}
          >
            {datetime.get12HourTime(meeting.time)}
          </Text>
          {isPhone && <Hint fontSize="12px" label={MEETING_INFO} marginLeft="4px" />}
        </Flex>
        <Text fontWeight="600" marginX={isPhone ? "" : "8px"}>
          {meeting.name}
        </Text>
        {isPhone || <Hint fontSize="12px" label={MEETING_INFO} />}
      </Flex>
      <Flex gridGap="4px" marginLeft="auto" align="center">
        <Link to={meeting.link} isWrapper>
          <ActionButton
            icon={<FaPhone />}
            hint={meeting.confirmedByParticipant ? "Confirmed" : "Pending"}
            colorScheme={meeting.confirmedByParticipant ? "green" : "gray"}
          />
        </Link>
        <Link
          to={`/study/${meeting.studyID}/participants/${meeting.participantID}/meetings`}
          isWrapper
        >
          <ActionButton icon={<FaPencilAlt />} hint="Edit" colorScheme="blue" />
        </Link>
        <ActionButton
          icon={<FaTrashAlt />}
          hint="Delete"
          colorScheme="red"
          onClick={handleDelete}
        />
      </Flex>
    </Card>
  );
}

export default ScheduleMeetingsItemResearcher;
