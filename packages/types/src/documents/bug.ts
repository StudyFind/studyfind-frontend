import { Email, Timestamp } from "../custom";

export type BugSystem = "Android" | "iOS" | "macOS" | "Windows" | "Linux" | "Other";
export type BugBrowser = "Firefox" | "Opera" | "Internet Edge" | "Chrome" | "Safari" | "Other";

export interface BugDocumentStructure {
  description: string;
  screenshot: File | null;
  browser: BugBrowser;
  system: BugSystem;
  email: Email;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
