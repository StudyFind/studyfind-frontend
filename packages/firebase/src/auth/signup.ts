import * as moment from "moment-timezone";

import { auth, side } from "../config";
import { setDoesUserExist } from "./utils";
import { createResearcherDocument } from "../firestore/mutations/researcher";
import { createParticipantDocument } from "../firestore/mutations/participant";
import {
  CreateParticipantDocument,
  CreateResearcherDocument,
  Timezone,
  UserID,
} from "@studyfind/types";

interface SignUpPayload {
  name: string;
  email: string;
  password: string;
}

const defaultResearcher: CreateResearcherDocument = {
  organization: "",
  background: "",
  phone: "",
  timezone: {
    region: moment.tz.guess() as Timezone,
    autodetect: true,
    updatedAt: moment.utc().valueOf(),
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
    region: moment.tz.guess() as Timezone,
    autodetect: true,
    updatedAt: moment.utc().valueOf(),
  },
  location: {
    address: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
    autodetect: false,
    updatedAt: moment.utc().valueOf(),
  },
  notifications: {
    local: true,
    email: false,
    phone: false,
  },
};

const createUserDocument = {
  RESEARCHER: (uid: UserID) => createResearcherDocument(uid, defaultResearcher),
  PARTICIPANT: (uid: UserID) => createParticipantDocument(uid, defaultParticipant),
}[side];

export const signup = async ({ name, email, password }: SignUpPayload) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);

  if (user) {
    await Promise.all([
      user.sendEmailVerification(),
      user.updateProfile({ displayName: name }),
      createUserDocument(user.uid),
    ]);

    setDoesUserExist("Yes");
  }
};
