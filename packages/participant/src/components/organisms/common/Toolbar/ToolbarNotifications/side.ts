import { actions, queries } from "@studyfind/api";

const side = process.env.REACT_APP_SIDE;

export const getNotificationsQuery =
  side === "RESEARCHER"
    ? queries.researcher.getNotificationsQuery
    : queries.participant.getNotificationsQuery;

export const readNotification =
  side === "RESEARCHER"
    ? actions.researcher.readNotification
    : actions.participant.readNotification;
