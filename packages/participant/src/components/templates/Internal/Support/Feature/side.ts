import { actions } from "@studyfind/api";

export const submitFeature =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? actions.researcher.submitFeature
    : actions.participant.submitFeature;
