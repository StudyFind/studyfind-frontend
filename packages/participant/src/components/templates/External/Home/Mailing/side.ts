import { actions } from "@studyfind/api";

export const subscribeMailing =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? actions.researcher.subscribeMailing
    : actions.participant.subscribeMailing;
