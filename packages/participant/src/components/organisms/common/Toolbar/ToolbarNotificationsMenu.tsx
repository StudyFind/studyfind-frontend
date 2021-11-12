import { auth, firestore } from "@studyfind/firebase";
import { useCollection } from "hooks";
import { Loader } from "components/atoms";
import { Flex, MenuList, Grid, Divider } from "@chakra-ui/react";
import { ParticipantNotificationDocumentStructure } from "@studyfind/types";

import ToolbarNotificationsMenuItem from "./ToolbarNotificationsMenuItem";

function ToolbarSettingsMenu() {
  const [notifications, loading, error] = useCollection<ParticipantNotificationDocumentStructure>( // TODO: make this dyanmic based on side
    firestore.references.getParticipantNotificationsReference(auth.getUser().uid)
  );

  // const notifications2 = notifications
  //   ? [
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //       notifications[0],
  //     ]
  //   : [];

  const handleNotificationRead = (notification: ParticipantNotificationDocumentStructure) => {
    return Promise.resolve(); // TODO: Update notification document
  };

  return (
    <MenuList padding="0" maxHeight="300px" overflowY="scroll">
      <Grid width="400px">
        {(!loading &&
          notifications?.map((notification, i) => (
            <>
              {i !== 0 && <Divider />}
              <ToolbarNotificationsMenuItem
                key={i}
                notification={notification}
                handleNotificationRead={handleNotificationRead}
              />
            </>
          ))) || (
          <Flex height="200px" justify="center" align="center">
            <Loader size="md" />
          </Flex>
        )}
      </Grid>
    </MenuList>
  );
}

export default ToolbarSettingsMenu;
