import {
  StudyLocation,
  StudyQuestion,
  StudyResource,
  StudySex,
  StudyType,
} from "../documents/study";
import { Email, UserID } from "../custom";

export interface CreateStudyDocument {
  activated: true;
  title: string;
  description: string;
  sex: StudySex;

  minAge: number;
  maxAge: number;
  acceptsHealthyParticipants: boolean;
  acceptsRemoteParticipants: boolean;
  type: StudyType;

  researcher: {
    id: UserID;
    name: string;
    email: Email;
  };

  conditions: string[];

  locations: StudyLocation[];
  questions: StudyQuestion[];
  resources: StudyResource[];
}

export type UpdateStudyDocument = {
  activated?: boolean;
  title?: string;
  description?: string;
  sex?: StudySex;

  minAge?: number;
  maxAge?: number;
  acceptsHealthyParticipants?: boolean;
  acceptsRemoteParticipants?: boolean;
  type?: StudyType;

  conditions?: string[];

  locations?: StudyLocation[];
  questions?: StudyQuestion[];
  resources?: StudyResource[];
};

// export type UpdateStudyDocument =
//   | {
//       activated: boolean;
//     }
//   | {
//       title: string;
//       description: string;
//       sex: StudySex;

//       minAge: number;
//       maxAge: number;
//       acceptsHealthyParticipants: boolean;
//       acceptsRemoteParticipants: boolean;
//       type: StudyType;

//       conditions: string[];
//     }
//   | {
//       locations: StudyLocation[];
//     }
//   | {
//       questions: StudyQuestion[];
//     }
//   | {
//       resources: StudyResource[];
//     };
