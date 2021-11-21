import { useRef } from "react";
import { useCollection, useOverlay } from "hooks";
import { getNotificationsQuery, readNotification } from "./side";

import { FaBell } from "react-icons/fa";
import { Loader, Message } from "components/atoms";
import { Flex, MenuList, Grid, Divider } from "@chakra-ui/react";
import { UserNotificationDocument, UserNotificationDocumentExtended } from "types/side";

import ToolbarNotificationsItem from "./ToolbarNotificationsItem";
import ToolbarLink from "../ToolbarLink";

function ToolbarNotifications() {
  const dummy = useRef<HTMLDivElement>(null);

  const { isOpen, handleOpen, handleClose } = useOverlay({
    onOpen: () => {
      dummy.current?.scrollIntoView();
    },
  });

  const [notifications, loading, error] = useCollection<UserNotificationDocument>(
    getNotificationsQuery()
  );

  const handleNotificationRead = (notification: UserNotificationDocumentExtended) => {
    return readNotification({ notificationID: notification.id });
  };

  const MENU = (
    <MenuList padding="0" maxHeight="300px" overflowY="scroll">
      <Grid width="400px">
        <div ref={dummy} />
        {!error ? (
          (!loading &&
            notifications?.map((notification, i) => (
              <>
                {i !== 0 && <Divider />}
                <ToolbarNotificationsItem
                  key={i}
                  isOpen={isOpen}
                  notification={notification}
                  handleNotificationRead={handleNotificationRead}
                />
              </>
            ))) || (
            <Flex height="200px" justify="center" align="center">
              <Loader size="md" />
            </Flex>
          )
        ) : (
          <Message
            status="failure"
            title="Internal Error"
            description="We could not load your notifications"
          />
        )}
      </Grid>
    </MenuList>
  );

  return (
    <ToolbarLink
      name="notifications"
      icon={<FaBell />}
      menu={MENU}
      isOpen={isOpen}
      onOpen={handleOpen}
      onClose={handleClose}
      showAlert={!loading && !(notifications?.length && notifications[0].read)}
    />
  );
}

export default ToolbarNotifications;
