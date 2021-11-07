import { auth } from "../config";
import { setDoesUserExist } from "./utils";
import { createResearcherDocument } from "../firestore/mutations/researcher";
import { createParticipantDocument } from "../firestore/mutations/participant";
import {
  CreateParticipantDocument,
  CreateResearcherDocument,
  Timezone,
  UserID,
} from "@studyfind/types";
import { getNow, guessTimezone } from "../firestore/utils";

interface SignUpPayload {
  side: "RESEARCHER" | "PARTICIPANT";
  name: string;
  email: string;
  password: string;
}

const defaultResearcher: CreateResearcherDocument = {
  organization: "",
  background: "",
  phone: "",
  timezone: {
    region: guessTimezone() as Timezone,
    autodetect: true,
    updatedAt: getNow(),
  },
  notifications: {
    local: true,
    email: false,
    phone: false,
  },
};

const defaultParticipant: CreateParticipantDocument = {
  sex: "",
  birthdate: "",
  availability: "",
  phone: "",
  enrolled: [],
  saved: [],
  timezone: {
    region: guessTimezone() as Timezone,
    autodetect: true,
    updatedAt: getNow(),
  },
  location: {
    address: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    autodetect: false,
    updatedAt: getNow(),
  },
  notifications: {
    local: true,
    email: false,
    phone: false,
  },
};

export const signup = async ({ side, name, email, password }: SignUpPayload) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  const createUserDocument = {
    RESEARCHER: (uid: UserID) => createResearcherDocument(uid, defaultResearcher),
    PARTICIPANT: (uid: UserID) => createParticipantDocument(uid, defaultParticipant),
  }[side];

  if (user) {
    await Promise.all([
      user.sendEmailVerification(),
      user.updateProfile({ displayName: name }),
      createUserDocument(user.uid),
    ]);

    setDoesUserExist("Yes");
  }
};
