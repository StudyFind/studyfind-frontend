import { queries } from "@studyfind/api";

export const getScheduleQuery =
  process.env.REACT_APP_SIDE === "RESEARCHER"
    ? queries.researcher.getScheduleQuery
    : queries.participant.getScheduleQuery;
