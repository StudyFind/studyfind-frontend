import { Address, Latitude, Longitude, Timestamp, Timezone, URL } from "../custom";

export interface CreateTracking {
  createdAt: Timestamp;
}

export interface UpdateTracking {
  updatedAt: Timestamp;
}

export interface UserTimezoneStructure {
  timezone: {
    region: Timezone;
    autodetect: boolean;
    updatedAt: Timestamp;
  };
}

export interface UserLocationStructure {
  location: {
    address: Address;
    coordinates: {
      latitude: Latitude;
      longitude: Longitude;
    };
    autodetect: boolean;
    updatedAt: Timestamp;
  };
}

export interface UserNotificationSettingsStructure {
  notifications: {
    local: boolean;
    email: boolean;
    phone: boolean;
  };
}

export interface CommonNotificationDocumentStructure extends CreateTracking, UpdateTracking {
  title: string;
  body: string;
  link: URL;
  read: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Metadata {
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
