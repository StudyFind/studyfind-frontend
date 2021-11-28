import { queries, actions } from "@studyfind/api";

export const getUser =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? queries.researcher.getResearcherQuery
    : queries.participant.getParticipantQuery;

export const getStudies = queries.researcher.getDashboardQuery;

export const updateUserTimezone =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? actions.researcher.updateUserTimezone
    : actions.participant.updateUserTimezone;
