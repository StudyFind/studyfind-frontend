import { useContext } from "react";

import { CredContext } from "context/CredContext";
import { StudiesContext } from "context/StudiesContext";

import DashboardGrid from "./DashboardGrid";
import DashboardEmpty from "./DashboardEmpty";

function Dashboard() {
  const cred = useContext(CredContext);
  const studies = useContext(StudiesContext);

  const verified = cred.emailVerified || false;

  if (studies.length === 0) {
    return <DashboardEmpty verified={verified} />;
  }

  return <DashboardGrid verified={verified} studies={studies} />;
}

export default Dashboard;
