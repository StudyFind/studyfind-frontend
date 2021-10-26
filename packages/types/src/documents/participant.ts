import { Date, DocumentID, Phone } from "../custom";
import {
  Metadata,
  UserLocationStructure,
  UserNotificationSettingsStructure,
  UserTimezoneStructure,
} from "../reused";

export type BiologicalSex = "" | "Male" | "Female";

export interface ParticipantDocumentStructure
  extends UserTimezoneStructure,
    UserLocationStructure,
    UserNotificationSettingsStructure,
    Metadata {
  sex: BiologicalSex;
  birthdate: Date;
  availability: string;
  phone: Phone;
  enrolled: DocumentID[];
  saved: DocumentID[];
}
