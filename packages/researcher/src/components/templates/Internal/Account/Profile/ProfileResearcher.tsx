import { Grid } from "@chakra-ui/react";
import { TextInput, TextareaInput, PhoneInput } from "components/atoms";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";
import { ResearcherDocument } from "@studyfind/types";

interface Props {
  values: ResearcherDocument | undefined;
  showButtons: boolean;
  handleCancel: () => void;
  handleUpdate: () => Promise<void>;
  handleSetProfileAttribute: (name: string, value: string) => void;
}

function ProfileResearcher({
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
        description="The profile section contains personal information like your organization and background"
      />
      <Grid gap="25px">
        <PhoneInput
          label="Phone"
          name="phone"
          placeholder="Required for receiving text notifications"
          value={values?.phone || ""}
          onChange={handleSetProfileAttribute}
        />
        <TextInput
          label="Organization"
          name="organization"
          value={values?.organization || ""}
          onChange={handleSetProfileAttribute}
        />
        <TextareaInput
          label="Background"
          name="background"
          height="108px"
          value={values?.background || ""}
          onChange={handleSetProfileAttribute}
        />
      </Grid>
    </AccountWrapper>
  );
}

export default ProfileResearcher;
