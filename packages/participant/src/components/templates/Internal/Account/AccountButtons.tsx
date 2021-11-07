import { Flex, Button } from "@chakra-ui/react";
import { SecondaryButton } from "components/atoms/Buttons/SecondaryButton/SecondaryButton";

interface Props {
  loading: boolean;
  handleCancel: React.MouseEventHandler;
  handleUpdate: React.MouseEventHandler;
}

function AccountButtons({ loading, handleCancel, handleUpdate }: Props) {
  return (
    <Flex gridGap="10px" justify="flex-end">
      <SecondaryButton isDisabled={loading} onClick={handleCancel}>
        Cancel
      </SecondaryButton>
      <Button
        colorScheme="green"
        loadingText="Save Changes"
        isLoading={loading}
        onClick={handleUpdate}
      >
        Save Changes
      </Button>
    </Flex>
  );
}

export default AccountButtons;
