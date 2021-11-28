import { useDevice } from "hooks";

import { datetime } from "@studyfind/utils";

import { MeetingDocumentExtended } from "types/extended";

import { Flex, Text } from "@chakra-ui/react";
import { FaCheckCircle, FaPhone } from "react-icons/fa";
import { Card, Hint, Link, ActionButton } from "components/atoms";

interface Props {
  meeting: MeetingDocumentExtended;
  handleConfirm: () => Promise<void>;
}

function ScheduleMeetingsItemParticipant({ meeting, handleConfirm }: Props) {
  const { isPhone } = useDevice();

  const MEETING_INFO = (
    <>
      <Text>
        Study ID: <b>{meeting.studyID}</b>
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
        {!meeting.confirmedByParticipant ? (
          <ActionButton
            icon={<FaCheckCircle />}
            hint="Confirm"
            colorScheme="blue"
            onClick={handleConfirm}
          />
        ) : (
          <Link to={meeting.link} isWrapper>
            <ActionButton icon={<FaPhone />} hint="Join" colorScheme="green" />
          </Link>
        )}
      </Flex>
    </Card>
  );
}

export default ScheduleMeetingsItemParticipant;
