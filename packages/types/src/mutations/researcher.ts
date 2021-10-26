import { Phone, Timestamp, Timezone } from "../custom";

export interface CreateResearcherDocument {
  organization: "";
  background: "";
  phone: "";
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

export type UpdateResearcherDocument = {
  organization?: string;
  background?: string;
  phone?: Phone;
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

// export type UpdateResearcherDocument =
//   | {
//       organization?: string;
//       background?: string;
//       phone?: Phone;
//     }
//   | {
//       timezone?: {
//         region?: Timezone;
//         autodetect?: boolean;
//         updatedAt?: Timestamp;
//       };
//     }
//   | {
//       notifications: {
//         local?: boolean;
//         email?: boolean;
//         phone?: boolean;
//       };
//     }
//   | {
//       organization?: string;
//       background?: string;
//       phone?: Phone;
//       timezone?: {
//         region?: Timezone;
//         autodetect?: boolean;
//         updatedAt?: Timestamp;
//       };
//       notifications: {
//         local?: boolean;
//         email?: boolean;
//         phone?: boolean;
//       };
//     };
