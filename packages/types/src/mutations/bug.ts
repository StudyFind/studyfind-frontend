import { BugBrowser, BugSystem } from "..";
import { Email, Timestamp } from "../custom";

export interface CreateBugDocument {
  description: string;
  screenshot: File | null;
  browser: BugBrowser;
  system: BugSystem;
  email: Email;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
