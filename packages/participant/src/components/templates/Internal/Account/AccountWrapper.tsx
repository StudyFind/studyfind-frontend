import { useState } from "react";
import { useDevice } from "hooks";

import { Grid } from "@chakra-ui/react";

import AccountButtons from "./AccountButtons";

interface Props {
  children: React.ReactNode;
  showButtons: boolean;
  handleCancel?: React.MouseEventHandler;
  handleUpdate?: () => Promise<void>;
}

function AccountWrapper({
  children,
  showButtons = false,
  handleCancel = () => {},
  handleUpdate = () => Promise.resolve(),
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    return handleUpdate().finally(() => setLoading(false));
  };

  const { isPhone } = useDevice();

  return (
    <Grid
      gap="30px"
      marginLeft={isPhone ? "0" : "40px"}
      marginTop={isPhone ? "40px" : "0"}
      maxWidth="400px"
    >
      {children}
      {showButtons && (
        <AccountButtons loading={loading} handleCancel={handleCancel} handleUpdate={handleSubmit} />
      )}
    </Grid>
  );
}

export default AccountWrapper;
