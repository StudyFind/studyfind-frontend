import { useState, useEffect } from "react";
import { useDocument } from "hooks";

import { FaUser, FaBell, FaShieldAlt, FaCreditCard, FaMapMarkedAlt } from "react-icons/fa";
import { Box } from "@chakra-ui/react";

import { auth, firestore } from "@studyfind/firebase";
import { ResearcherDocumentStructure, ParticipantDocumentStructure } from "@studyfind/types";
import { Side } from "types/global";

import { Loader } from "components/atoms";

import ProfileResearcher from "./Profile/ProfileResearcher";
import ProfileParticipant from "./Profile/ProfileParticipant";
import Notifications from "./Notifications/Notifications";
import Timezone from "./Timezone/Timezone";
import Security from "./Security/Security";
import Subscription from "./Subscription/Subscription";

import VerticalTabs from "components/molecules/VerticalTabs/VerticalTabs";

export type DocumentStructure = ResearcherDocumentStructure | ParticipantDocumentStructure;

const side = process.env.REACT_APP_SIDE as Side;

const Profile = {
  RESEARCHER: (props: any) => <ProfileResearcher {...props} />,
  PARTICIPANT: (props: any) => <ProfileParticipant {...props} />,
}[side];

function AccountPage() {
  const user = auth.getUser();

  const reference = {
    RESEARCHER: firestore.references.getResearcherReference(user?.uid),
    PARTICIPANT: firestore.references.getParticipantReference(user?.uid),
  }[side];

  const [userDocument, loading, error] = useDocument<DocumentStructure>(reference);
  const [values, setValues] = useState<typeof userDocument>(undefined);

  useEffect(() => {
    if (!values && userDocument) {
      setValues(userDocument);
    }
  }, [userDocument]);

  const haveInputsChanged = JSON.stringify(values) !== JSON.stringify(userDocument);

  const handleCancel = () => {
    console.log("handleCancel");
    setValues(userDocument);
  };

  const handleUpdate = () => {
    // return mutator.update(user.id, values);
    return Promise.resolve(); // TODO: Update user document
  };

  const handleSetProfileAttribute = (name: string, value: string) => {
    console.log("handleSetProfileAttribute");
    setValues((prev) => prev && { ...prev, [name]: value });
  };

  const handleSetNotificationsAttribute = (name: string, value: boolean) => {
    console.log("handleSetNotificationsAttribute");
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
    console.log("handleSetTimezoneAttribute");
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
    content: (
      <Profile
        {...updateProps}
        values={
          side === "RESEARCHER"
            ? (values as ResearcherDocumentStructure | undefined)
            : (values as ParticipantDocumentStructure | undefined)
        }
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
    content: <Subscription {...updateProps} />,
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
