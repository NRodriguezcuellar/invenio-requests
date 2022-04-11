import React from "react";
import { TimelineActionEvent } from "../components/TimelineActionEvent";

export const TimelineAcceptEvent = ({ event }) => (
  <TimelineActionEvent
    iconName="check circle"
    iconColor={"green"}
    event={event}
  />
);

export const TimelineDeclineEvent = ({ event }) => (
  <TimelineActionEvent iconName="close" event={event} iconColor="red" />
);

export const TimelineExpireEvent = ({ event }) => (
  <TimelineActionEvent iconName="calendar times" event={event} userAction={false} iconColor="red" />
);

export const TimelineCancelEvent = ({ event }) => (
  <TimelineActionEvent iconName="close" event={event} iconColor="red" />
);
