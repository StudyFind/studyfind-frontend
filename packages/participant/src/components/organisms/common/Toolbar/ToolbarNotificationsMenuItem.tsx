import { useState, useEffect } from "react";
import { useColor, useDevice } from "hooks";

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

import ToolbarNotificationsMenuItemIcon from "./ToolbarNotificationsMenuItemIcon";
import ToolbarNotificationsMenuItemTime from "./ToolbarNotificationsMenuItemTime";
import { ParticipantNotificationDocumentStructure } from "@studyfind/types";
import { IconType } from "react-icons/lib";
import { ColorScheme } from "types/global";

interface Props {
  notification: ParticipantNotificationDocumentStructure; // TODO: make this dyanmic based on side
  handleNotificationRead: (notification: ParticipantNotificationDocumentStructure) => Promise<void>; // TODO: make this dyanmic based on side
}

interface Theme {
  icon: IconType;
  colorScheme: ColorScheme;
}

function NotificationItem({ notification, handleNotificationRead }: Props) {
  const [initialRead] = useState(notification.read);
  /*
    ^^^^^
    done to save original value of notification.read when the component first rendered
    the purpose is to save the original read state of the notification even though read
    is changed from false to true in the useEffect below
    the notification prop is attached to a firebase realtime listener hook which will change
    the value of notification.read as soon as its updated
    this update would change the blue "unread" background to the white "background" almost
    immediately without conveying to the user that this is a new notification
    the blue background would've disappeared the next time the component is loaded as the
    original notification.read value would be true when the component first renders
  */

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
  };

  const { icon, colorScheme } = themes[code];

  useEffect(() => {
    if (!initialRead) {
      handleNotificationRead(notification);
    }
  }, []);

  const { isPhone } = useDevice();

  const titleColor = useColor("black", "white");

  // convert external link to internal link otherwise Link component will open link in new tab
  const hostname = "https://researcher.studyfind.org"; // TODO: make this dyanmic based on side
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
        <ToolbarNotificationsMenuItemIcon icon={icon} colorScheme={colorScheme} />
        <Box width="100%" marginLeft="4px">
          <Flex
            direction={isPhone ? "column" : "row"}
            justify={isPhone ? "" : "space-between"}
            align={isPhone ? "flex-start" : "center"}
          >
            <Text fontSize="14px" fontWeight="600" color={titleColor}>
              {title}
              {!read && (
                <Icon
                  as={FaCircle}
                  color="blue.400"
                  fontSize="14px"
                  paddingLeft="5px"
                  paddingBottom="2px"
                />
              )}
            </Text>
            <ToolbarNotificationsMenuItemTime time={1636574902384 || createdAt} />
            {/* // TODO: remove fixed value */}
          </Flex>
          <Text fontSize="14px" fontWeight="400" color="gray.400">
            {body || "This is an example line of text to fill up some space"}
            {/* // TODO: remove fixed value */}
          </Text>
        </Box>
      </Flex>
    </MenuItem>
  );
}

export default NotificationItem;
