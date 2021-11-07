import { Divider } from "@chakra-ui/react";
import AccountWrapper from "../AccountWrapper";

import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

function Security() {
  return (
    <AccountWrapper showButtons={false}>
      <ChangePassword />
      <Divider />
      <DeleteAccount />
    </AccountWrapper>
  );
}

export default Security;
