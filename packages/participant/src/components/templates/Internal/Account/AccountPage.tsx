import { useState, useEffect } from "react";
import { useDocument } from "hooks";

import { FaUser, FaBell, FaShieldAlt, FaCreditCard, FaMapMarkedAlt } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

import { auth, firestore } from "@studyfind/firebase";
import { ParticipantDocumentStructure } from "@studyfind/types";
import { Side } from "types/global";

// import ProfileResearcher from "./Profile/ProfileResearcher";
// import ProfileParticipant from "./Profile/ProfileParticipant";
import Notifications from "./Notifications/Notifications";
// import Timezone from "./Timezone/Timezone";
import Security from "./Security/Security";
// import Subscription from "./Subscription/Subscription";

import VerticalTabs from "components/molecules/VerticalTabs/VerticalTabs";
import { Loader } from "components/atoms/Loader/Loader";

function AccountPage() {
  const user = auth.getUser();
  const side = process.env.REACT_APP_SIDE as Side;

  const [participant, loading, error] = useDocument<ParticipantDocumentStructure>(
    firestore.references.getParticipantReference(user?.uid)
  );

  const [values, setValues] = useState(participant);

  // const Profile = {
  //   RESEARCHER: ProfileResearcher,
  //   PARTICIPANT: ProfileParticipant,
  // }[side];

  useEffect(() => {
    if (participant) {
      setValues(participant);
    }
  }, [participant]);

  const haveInputsChanged = JSON.stringify(values) !== JSON.stringify(participant);

  const handleCancel = () => {
    setValues(participant);
  };

  const handleUpdate = () => {
    // return mutator.update(user.id, values);
    return Promise.resolve();
  };

  const handleSetProfileAttribute = (name: keyof ParticipantDocumentStructure, value: string) => {
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

  const handleSetTimezoneAttribute = (name: string, value: string) => {
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
    content: <div>PROFILE</div>,
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
    content: <div>TIMEZONE</div>,
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
    content: <div>SUBSCRIPTION</div>,
  };

  const tabs =
    side === "RESEARCHER"
      ? [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY, SUBSCRIPTION]
      : [PROFILE, NOTIFICATIONS, TIMEZONE, SECURITY, SUBSCRIPTION];

  return (
    <Box paddingY="10px">
      <VerticalTabs tabs={tabs} width="400px" useURL />
    </Box>
  );
}

export default AccountPage;
