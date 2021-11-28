import { useState, useEffect } from "react";

import { updateUserAccount } from "./side";

import { UserDocument, UserDocumentExtended } from "types/side";

import { Box, useToast } from "@chakra-ui/react";
import { FaUser, FaBell, FaShieldAlt, FaCreditCard, FaMapMarkedAlt } from "react-icons/fa";

import ProfileResearcher from "./Profile/ProfileResearcher";
import ProfileParticipant from "./Profile/ProfileParticipant";
import Notifications from "./Notifications/Notifications";
import Timezone from "./Timezone/Timezone";
import Security from "./Security/Security";
import Subscription from "./Subscription/Subscription";

import VerticalTabs from "components/molecules/VerticalTabs/VerticalTabs";
import { useUser } from "hooks";

const Profile = process.env.REACT_APP_SIDE
  ? (props: any) => <ProfileResearcher {...props} />
  : (props: any) => <ProfileParticipant {...props} />;

function AccountPage() {
  const user = useUser();
  const toast = useToast();

  const [values, setValues] = useState(user);

  useEffect(() => {
    if (user) {
      setValues(user);
    }
  }, [user]);

  const haveInputsChanged = JSON.stringify(values) !== JSON.stringify(user);

  const handleCancel = () => {
    setValues(user);
  };

  const handleUpdate = async () => {
    return updateUserAccount(values as UserDocumentExtended).then(() => {
      toast({
        title: "Your profile information was successfully updated!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    });
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

  const updateProps = {
    values,
    showButtons: haveInputsChanged,
    handleCancel,
    handleUpdate,
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
    process.env.REACT_APP_SIDE === "RESEARCHER"
      ? [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY, SUBSCRIPTION]
      : [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY];

  return (
    <Box paddingY="10px">
      <VerticalTabs tabs={tabs} width="400px" useURL />
    </Box>
  );
}

export default AccountPage;
