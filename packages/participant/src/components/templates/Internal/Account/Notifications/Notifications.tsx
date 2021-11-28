import { useCred } from "hooks";

import { UserDocument } from "types/side";

import { Grid, Tooltip, Box } from "@chakra-ui/react";
import { CheckboxInput } from "components/atoms/Inputs/CheckboxInput/CheckboxInput";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

interface Props {
  values: UserDocument | undefined;
  showButtons: boolean;
  handleCancel: React.MouseEventHandler;
  handleUpdate: () => Promise<void>;
  handleSetNotificationsAttribute: (name: string, value: boolean) => void;
}

function Notifications({
  values,
  showButtons,
  handleCancel,
  handleUpdate,
  handleSetNotificationsAttribute,
}: Props) {
  const { email } = useCred();

  const phone = values?.phone || "";
  const localPreference = values?.notifications?.local || false;
  const emailPreference = values?.notifications?.email || false;
  const phonePreference = values?.notifications?.phone || false;

  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <Grid gap="20px">
        <AccountHeader
          title="Notifications"
          description="The notification section allows you to change what notifications you want to see and where you want to receive them"
        />
        <Grid gap="16px" paddingY="4px" maxW="400px">
          <CheckboxInput
            name="local"
            label="Receive Local Notifications"
            details="Sends notifications in your browser window"
            value={localPreference}
            onChange={handleSetNotificationsAttribute}
          />
          <CheckboxInput
            name="email"
            label="Receive Email Notifications"
            details={`Sends notifications to your inbox at ${email}`}
            value={emailPreference}
            onChange={handleSetNotificationsAttribute}
          />
          <Tooltip
            label={
              phone ||
              "You must provide a valid phone number in the profile section to enable text notifications"
            }
          >
            <Box>
              <CheckboxInput
                name="phone"
                label="Receive Text Notifications"
                isDisabled={!phone}
                details={`Sends notifications to your phone ${phone && `at ${phone}`}`}
                value={phone ? phonePreference : false}
                onChange={handleSetNotificationsAttribute}
              />
            </Box>
          </Tooltip>
        </Grid>
      </Grid>
    </AccountWrapper>
  );
}

export default Notifications;
