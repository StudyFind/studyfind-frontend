import Router from "components/organisms/common/Router";

import Home from "pages/External/Home/Home";
import Auth from "pages/External/Auth/Auth";
import Team from "pages/External/Team/Team";

function External() {
  return (
    <Router
      routes={[
        { path: "/home", component: Home },
        { path: "/auth", component: Auth },
        { path: "/team", component: Team },
      ]}
      redirectTo="/home"
    />
  );
}

export default External;
