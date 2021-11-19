import { actions, queries } from "@studyfind/api";

import { useState, useEffect } from "react";
import { useDocument } from "hooks";

import { Box } from "@chakra-ui/react";
import { Loader, Message } from "components/atoms";
import { FaUser, FaBell, FaShieldAlt, FaCreditCard, FaMapMarkedAlt } from "react-icons/fa";

import { Side } from "types/global";
import { UserDocument } from "types/side";

import ProfileResearcher from "./Profile/ProfileResearcher";
import ProfileParticipant from "./Profile/ProfileParticipant";
import Notifications from "./Notifications/Notifications";
import Timezone from "./Timezone/Timezone";
import Security from "./Security/Security";
import Subscription from "./Subscription/Subscription";

import VerticalTabs from "components/molecules/VerticalTabs/VerticalTabs";

const side = process.env.REACT_APP_SIDE as Side;

const Profile = {
  RESEARCHER: (props: any) => <ProfileResearcher {...props} />,
  PARTICIPANT: (props: any) => <ProfileParticipant {...props} />,
}[side];

function AccountPage() {
  const reference = {
    RESEARCHER: queries.researcher.getResearcherQuery(),
    PARTICIPANT: queries.participant.getParticipantQuery(),
  }[side];

  const [userDocument, loading, error] = useDocument<UserDocument>(reference);
  const [values, setValues] = useState<typeof userDocument>(undefined);

  useEffect(() => {
    if (userDocument) {
      setValues(userDocument);
    }
  }, [userDocument]);

  const haveInputsChanged = JSON.stringify(values) !== JSON.stringify(userDocument);

  const handleCancel = () => {
    setValues(userDocument);
  };

  const handleUpdate = () => {
    const updateUserAccount =
      side === "RESEARCHER"
        ? actions.researcher.updateUserAccount
        : actions.participant.updateUserAccount;

    return updateUserAccount(values as UserDocument);
  };

  const handleSetProfileAttribute = (name: string, value: string) => {
    setValues((prev) => prev && { ...prev, [name]: value });
  };

  const handleSetNotificationsAttribute = (name: string, value: boolean) => {
    setValues(
      (prev) =>
        prev && {
          ...prev,
          notifications: {
            ...prev.notifications,
            [name]: value,
          },
        }
    );
  };

  const handleSetTimezoneAttribute = (name: string, value: string | boolean) => {
    setValues(
      (prev) =>
        prev && {
          ...prev,
          timezone: {
            ...prev.timezone,
            [name]: value,
          },
        }
    );
  };

  if (loading || !values) {
    return <Loader height="calc(100vh - 128px)" />;
  }

  if (error) {
    return (
      <Message
        status="failure"
        title="Database Error"
        description="We could not load your account information"
      />
    );
  }

  const updateProps = {
    values,
    showButtons: haveInputsChanged,
    handleCancel: handleCancel,
    handleUpdate: handleUpdate,
  };

  const PROFILE = {
    name: "Profile",
    link: "/account/profile",
    icon: <FaUser />,
    content: (
      <Profile
        {...updateProps}
        values={values as UserDocument}
        handleSetProfileAttribute={handleSetProfileAttribute}
      />
    ),
  };

  const NOTIFICATIONS = {
    name: "Notifications",
    link: "/account/notifications",
    icon: <FaBell />,
    content: (
      <Notifications
        {...updateProps}
        handleSetNotificationsAttribute={handleSetNotificationsAttribute}
      />
    ),
  };

  const TIMEZONE = {
    name: "Timezone",
    link: "/account/timezone",
    icon: <FaMapMarkedAlt />,
    content: <Timezone {...updateProps} handleSetTimezoneAttribute={handleSetTimezoneAttribute} />,
  };

  const SECURITY = {
    name: "Security",
    link: "/account/security",
    icon: <FaShieldAlt />,
    content: <Security />,
  };

  const SUBSCRIPTION = {
    name: "Subscription",
    link: "/account/subscription",
    icon: <FaCreditCard />,
    content: <Subscription />,
  };

  const tabs =
    side === "RESEARCHER"
      ? [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY, SUBSCRIPTION]
      : [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY];

  return (
    <Box paddingY="10px">
      <VerticalTabs tabs={tabs} width="400px" useURL />
    </Box>
  );
}

export default AccountPage;
