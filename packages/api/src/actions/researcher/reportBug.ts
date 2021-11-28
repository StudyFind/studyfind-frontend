import { auth, firestore, storage } from "@studyfind/firebase";
import { BugBrowser, BugSystem } from "@studyfind/types";

interface ReportBugPayload {
  description: string;
  browser: BugBrowser;
  system: BugSystem;
  screenshot?: File | null;
}

export const reportBug = async ({ description, browser, system, screenshot }: ReportBugPayload) => {
  const email = auth.getUser().email;

  const newBugDoc = await firestore.mutations.createBugDocument({
    description,
    browser,
    system,
    email,
    side: "RESEARCHER",
  });

  if (screenshot) {
    storage.uploadFile(`bugs/${newBugDoc}`, screenshot);
  }

  return Promise.resolve(newBugDoc);
};
