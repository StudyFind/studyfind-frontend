import moment from "moment-timezone";

import { Box, Grid, Tooltip } from "@chakra-ui/react";
import { SelectInput, CheckboxInput } from "components/atoms";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

import { UserDocument } from "types/side";

interface Props {
  values: UserDocument | undefined;
  showButtons: boolean;
  handleCancel: React.MouseEventHandler;
  handleUpdate: () => Promise<void>;
  handleSetTimezoneAttribute: (name: string, value: boolean | string) => void;
}

function Timezone({
  values,
  showButtons,
  handleCancel,
  handleUpdate,
  handleSetTimezoneAttribute,
}: Props) {
  const autodetect = values?.timezone?.autodetect;
  const options = moment.tz.zonesForCountry("US").map((timezone) => ({
    label: timezone,
    value: timezone,
  }));

  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <Grid gap="25px">
        <AccountHeader
          title="Timezone"
          description="We use the selected timezone to display your meeting times and notifications"
        />
        <CheckboxInput
          name="autodetect"
          label="Auto Detect Timezone"
          details="Automatically detects and updates your local timezone each time you use StudyFind"
          value={autodetect || false}
          onChange={handleSetTimezoneAttribute}
        />
        <Tooltip
          label={
            autodetect &&
            "Disable Auto Detect Timezone by unchecking the box above to manually enter your preferred timezone"
          }
        >
          <Box>
            <SelectInput
              name="region"
              label="Timezone Region"
              value={values?.timezone?.region || ""}
              options={options}
              onChange={handleSetTimezoneAttribute}
              isDisabled={autodetect}
            />
          </Box>
        </Tooltip>
      </Grid>
    </AccountWrapper>
  );
}

export default Timezone;
