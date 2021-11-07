import { Switch, Route, Redirect } from "react-router-dom";
import { InternalLink, RouteData } from "types/global";

interface Props {
  routes: RouteData[];
  redirectTo: InternalLink;
}

function Router({ routes, redirectTo }: Props) {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} exact path={route.path} component={route.component} />
      ))}
      <Redirect to={redirectTo} />
    </Switch>
  );
}

export default Router;
