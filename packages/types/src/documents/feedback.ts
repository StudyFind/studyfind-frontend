import { Email, Timestamp, UserType } from "../custom";

export type FeedbackSystem = "Android" | "iOS" | "macOS" | "Windows" | "Linux" | "Other";
export type FeedbackBrowser = "Firefox" | "Opera" | "Internet Edge" | "Chrome" | "Safari" | "Other";

export interface FeedbackDocumentStructure {
  title: string;
  body: string;
  side: UserType;
  email: Email;
  system: FeedbackSystem;
  browser: FeedbackBrowser;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
