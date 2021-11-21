import { queries } from "@studyfind/api";

export const getUserQuery =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? queries.researcher.getResearcherQuery
    : queries.participant.getParticipantQuery;
