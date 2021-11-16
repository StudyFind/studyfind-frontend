import { BiologicalSex } from "../documents/participant";
import { Address, Date, Latitude, Longitude, Phone, Timestamp, Timezone } from "../custom";

export interface CreateParticipantDocument {
  sex: "";
  birthdate: "";
  availability: "";
  phone: "";
  enrolled: [];
  saved: [];
  timezone: {
    region: Timezone;
    autodetect: true;
    updatedAt: Timestamp;
  };
  notifications: {
    local: true;
    email: false;
    phone: false;
  };
}

export type UpdateParticipantDocument = {
  sex?: BiologicalSex;
  birthdate?: Date;
  availability?: string;
  phone?: Phone;
  enrolled?: any;
  saved?: any;
  timezone?: {
    region?: Timezone;
    autodetect?: boolean;
    updatedAt?: Timestamp;
  };
  notifications?: {
    local?: boolean;
    email?: boolean;
    phone?: boolean;
  };
};

// export type UpdateParticipantDocument =
//   | {
//       sex?: BiologicalSex;
//       birthdate?: Date;
//       availability?: string;
//       phone?: Phone;
//     }
//   | {
//       enrolled?: firebase.firestore.FieldValue; // special exception as we're using FieldValue arrayUnion and arrayRemove
//     }
//   | {
//       saved?: firebase.firestore.FieldValue; // special exception as we're using FieldValue arrayUnion and arrayRemove
//     }
//   | {
//       timezone?: {
//         region?: Timezone;
//         autodetect?: boolean;
//         updatedAt?: Timestamp;
//       };
//     }
//   | {
//       location?: {
//         address?: Address;
//         coordinates?: {
//           latitude?: Latitude;
//           longitude?: Longitude;
//         };
//         autodetect?: boolean;
//         updatedAt?: Timestamp;
//       };
//     }
//   | {
//       notifications?: {
//         local?: boolean;
//         email?: boolean;
//         phone?: boolean;
//       };
//     }
//   | {
//       sex?: BiologicalSex;
//       birthdate?: Date;
//       availability?: string;
//       phone?: Phone;
//       timezone?: {
//         region?: Timezone;
//         autodetect?: boolean;
//         updatedAt?: Timestamp;
//       };
//       location?: {
//         address?: Address;
//         coordinates?: {
//           latitude?: Latitude;
//           longitude?: Longitude;
//         };
//         autodetect?: boolean;
//         updatedAt?: Timestamp;
//       };
//       notifications?: {
//         local?: boolean;
//         email?: boolean;
//         phone?: boolean;
//       };
//     };
