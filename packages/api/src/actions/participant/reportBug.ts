import { auth, firestore } from "@studyfind/firebase";
import { BugBrowser, BugSystem } from "@studyfind/types";

interface ReportBugPayload {
  description: string;
  browser: BugBrowser;
  system: BugSystem;
  screenshot?: File | null;
}

export const reportBug = async ({ description, browser, system }: ReportBugPayload) => {
  const email = auth.getUser().email;

  return firestore.mutations.createBugDocument({
    description,
    browser,
    system,
    email,
    side: "PARTICIPANT",
  });
};
