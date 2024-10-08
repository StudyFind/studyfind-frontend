import { Grid } from "@chakra-ui/react";
import { RadioInput, TextInput, TextareaInput, PhoneInput } from "components/atoms";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";
import { ParticipantDocument } from "@studyfind/types";

interface Props {
  values: ParticipantDocument | undefined;
  showButtons: boolean;
  handleCancel: () => void;
  handleUpdate: () => Promise<void>;
  handleSetProfileAttribute: (name: string, value: string) => void;
}

function ProfileParticipant({
  values,
  showButtons,
  handleCancel,
  handleUpdate,
  handleSetProfileAttribute,
}: Props) {
  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <AccountHeader
        title="Profile"
        description="The profile section contains personal information like your sex, birthdate, and availability"
      />
      <Grid gap="25px">
        <RadioInput
          label="Biological Sex"
          name="sex"
          value={values?.sex || ""}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          onChange={handleSetProfileAttribute}
          allowUnselect
        />
        <TextInput
          type="date"
          name="birthdate"
          label="Birthdate"
          value={values?.birthdate || ""}
          onChange={handleSetProfileAttribute}
        />
        <PhoneInput
          label="Phone"
          name="phone"
          placeholder="Required for receiving text notifications"
          value={values?.phone || ""}
          onChange={handleSetProfileAttribute}
        />
        <TextareaInput
          label="Availability"
          name="availability"
          limit={500}
          height="100px"
          value={values?.availability || ""}
          onChange={handleSetProfileAttribute}
          placeholder="Put a little something about your weekly availability"
        />
      </Grid>
    </AccountWrapper>
  );
}

export default ProfileParticipant;
