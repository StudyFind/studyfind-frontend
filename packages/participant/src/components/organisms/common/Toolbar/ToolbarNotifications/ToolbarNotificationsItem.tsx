import { useState, useEffect } from "react";
import { useColorModeValue, useDevice } from "hooks";

import { Link } from "components/atoms";
import { Box, Flex, Text, Icon, MenuItem } from "@chakra-ui/react";
import {
  FaCalendar,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarMinus,
  FaCalendarPlus,
  FaCheckSquare,
  FaCircle,
  FaClipboard,
  FaClock,
  FaComment,
  FaDotCircle,
  FaMagic,
  FaUser,
  FaUserClock,
} from "react-icons/fa";

import { IconType } from "react-icons/lib";
import { ColorScheme } from "types/global";
import { UserNotificationDocumentExtended } from "types/side";

import ToolbarNotificationsItemIcon from "./ToolbarNotificationsItemIcon";
import ToolbarNotificationsItemTime from "./ToolbarNotificationsItemTime";

interface Props {
  isOpen: boolean;
  notification: UserNotificationDocumentExtended;
  handleNotificationRead: (notification: UserNotificationDocumentExtended) => Promise<void>;
}

interface Theme {
  icon: IconType;
  colorScheme: ColorScheme;
}

function ToolbarNotificationsItem({ isOpen, notification, handleNotificationRead }: Props) {
  const [emphasize, setEmphasize] = useState(false);

  const { code, createdAt, title, body, link, read } = notification;

  const themes: { [key: string]: Theme } = {
    CREATE_ACCOUNT: { icon: FaMagic, colorScheme: "purple" },
    CREATE_STUDY: { icon: FaClipboard, colorScheme: "green" },
    DELETE_STUDY: { icon: FaClipboard, colorScheme: "red" },
    PARTICIPANT_ENROLLED: { icon: FaUser, colorScheme: "teal" },
    PARTICIPANT_CONFIRMED_MEETING: { icon: FaCalendarCheck, colorScheme: "teal" },
    PARTICIPANT_CONFIRMED_REMINDER: { icon: FaCheckSquare, colorScheme: "teal" },
    RESEARCHER_SENT_MESSAGE: { icon: FaComment, colorScheme: "teal" },
    RESEARCHER_CREATED_MEETING: { icon: FaCalendarPlus, colorScheme: "green" },
    RESEARCHER_UPDATED_MEETING: { icon: FaCalendar, colorScheme: "blue" },
    RESEARCHER_DELETED_MEETING: { icon: FaCalendarMinus, colorScheme: "red" },
    RESEARCHER_CREATED_REMINDER: { icon: FaUserClock, colorScheme: "green" },
    RESEARCHER_UPDATED_REMINDER: { icon: FaUserClock, colorScheme: "blue" },
    RESEARCHER_DELETED_REMINDER: { icon: FaUserClock, colorScheme: "red" },
    RESEARCHER_CHANGED_PARTICIPANT_STATUS: { icon: FaDotCircle, colorScheme: "teal" },
    MEETING_NOW: { icon: FaCalendarDay, colorScheme: "cyan" },
    REMINDER_NOW: { icon: FaClock, colorScheme: "cyan" },
    DELETE_ACCOUNT: { icon: FaClock, colorScheme: "cyan" },
    NEW_MESSAGE: { icon: FaComment, colorScheme: "green" },
  };

  const { icon, colorScheme } = themes[code] || { icon: FaUser, colorScheme: "teal" };

  useEffect(() => {
    if (!read && isOpen) {
      setEmphasize(true);
      handleNotificationRead(notification);
    }
  }, [read, isOpen]);

  useEffect(() => {
    if (emphasize) {
      setTimeout(() => {
        setEmphasize(false);
      }, 3000);
    }
  }, [emphasize]);

  const { isPhone } = useDevice();

  const titleColor = useColorModeValue("black", "white");

  // convert external link to internal link otherwise Link component will open link in new tab
  const hostname =
    process.env.REACT_APP_SIDE === "RESEARCHER"
      ? "https://researcher.studyfind.org"
      : "https://studyfind.org";

  const internalLink = link.substring(hostname.length);

  return (
    <MenuItem
      as={Link}
      to={internalLink}
      display="flex"
      borderRadius="4px"
      justifyContent="flex-start"
      alignItems="center"
      gridGap="10px"
      fontWeight="500"
      padding="0"
      width="100%"
    >
      <Flex align="flex-start" padding="12px" gridGap="8px" rounded="md">
        <ToolbarNotificationsItemIcon icon={icon} colorScheme={colorScheme} />
        <Box width="100%" marginLeft="4px">
          <Flex
            direction={isPhone ? "column" : "row"}
            justify={isPhone ? "" : "space-between"}
            align={isPhone ? "flex-start" : "center"}
          >
            <Text fontSize="14px" fontWeight="600" color={titleColor}>
              {title}
              {emphasize && (
                <Icon
                  as={FaCircle}
                  color="blue.400"
                  fontSize="14px"
                  paddingLeft="5px"
                  paddingTop="3px"
                />
              )}
            </Text>
            <ToolbarNotificationsItemTime time={createdAt} />
          </Flex>
          <Text fontSize="14px" fontWeight="400" color="gray.400">
            {body}
          </Text>
        </Box>
      </Flex>
    </MenuItem>
  );
}

export default ToolbarNotificationsItem;
