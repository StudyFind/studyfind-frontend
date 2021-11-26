import { useContext, useState } from "react";

import { actions } from "@studyfind/api";

import { UserContext } from "context/UserContext";
import { ConfirmContext } from "context/ConfirmContext";

import { Action, StudyFull } from "./types";

import { ActionButton } from "components/atoms";
import { Text, Badge, Flex } from "@chakra-ui/react";
import {
  FaClock,
  FaCalendar,
  FaClipboard,
  FaComment,
  FaDoorOpen,
  FaDoorClosed,
} from "react-icons/fa";

interface Props {
  study: StudyFull;
  handleOpen: (studyID: string, action: Action) => void;
}

function YourStudiesItem({ study, handleOpen }: Props) {
  const user = useContext(UserContext);
  const confirm = useContext(ConfirmContext);

  const [hover, setHover] = useState(false);

  const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

  const handleConfirm = async () => {
    return actions.participant.leaveStudy({
      studyID: study.id,
      enrolled: user.enrolled.filter((studyID) => study.id !== studyID),
    });
  };

  const handleLeave = () => {
    confirm({
      title: "Leave Study",
      description:
        "Leaving a study is a permanent action and cannot be undone. This removes you as a participant of this study and deletes all your associated data. Are you sure you want to leave this study?",
      buttonText: "Leave",
      colorScheme: "red",
      handleConfirm,
    });
  };

  return (
    <Flex align="center" gridGap="10px" padding="10px">
      <Text fontWeight="500" mr="auto">
        {study.id}
      </Text>
      <Badge size="sm" colorScheme={statusColors[study.participant.status]}>
        {study.participant.status}
      </Badge>
      <Flex align="center" gridGap="5px">
        <ActionButton
          hint="Questions"
          icon={<FaClipboard />}
          onClick={() => handleOpen(study.id, "questions")}
        />
        <ActionButton
          hint="Meetings"
          icon={<FaCalendar />}
          onClick={() => handleOpen(study.id, "meetings")}
        />
        <ActionButton
          hint="Reminders"
          icon={<FaClock />}
          onClick={() => handleOpen(study.id, "reminders")}
        />
        <ActionButton
          hint="Messages"
          icon={<FaComment />}
          onClick={() => handleOpen(study.id, "messages")}
        />
        <ActionButton
          colorScheme="red"
          hint="Leave"
          icon={hover ? <FaDoorOpen /> : <FaDoorClosed />}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleLeave}
        />
      </Flex>
    </Flex>
  );
}

export default YourStudiesItem;
