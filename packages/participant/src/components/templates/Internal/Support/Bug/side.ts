import { actions } from "@studyfind/api";

export const reportBug =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? actions.researcher.reportBug
    : actions.participant.reportBug;
