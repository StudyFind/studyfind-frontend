import { useCred, useStudies } from "hooks";

import DashboardGrid from "./DashboardGrid";
import DashboardEmpty from "./DashboardEmpty";

function Dashboard() {
  const cred = useCred();
  const studies = useStudies();

  const verified = cred.emailVerified;

  if (studies.length === 0) {
    return <DashboardEmpty verified={verified} />;
  }

  return <DashboardGrid verified={verified} studies={studies} />;
}

export default Dashboard;
