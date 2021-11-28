import { Email, Timestamp, Side } from "../custom";

export type BugSystem = "" | "Android" | "iOS" | "macOS" | "Windows" | "Linux" | "Other";
export type BugBrowser = "" | "Firefox" | "Opera" | "Internet Edge" | "Chrome" | "Safari" | "Other";

export interface BugDocument {
  side: Side;
  email: Email;
  system: BugSystem;
  browser: BugBrowser;
  description: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CreateBugDocument {
  side: Side;
  email: Email;
  system: BugSystem;
  browser: BugBrowser;
  description: string;
}
