import { actions } from "@studyfind/api";

export const updateUserAccount =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? actions.researcher.updateUserAccount
    : actions.participant.updateUserAccount;
