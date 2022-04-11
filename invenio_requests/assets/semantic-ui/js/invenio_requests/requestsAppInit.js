// This file is part of InvenioRequests
// Copyright (C) 2022 CERN.
//
// Invenio RDM Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React from "react";
import ReactDOM from "react-dom";
import { InvenioRequestsApp } from "./InvenioRequestsApp";
import {
  TimelineAcceptEvent, TimelineCancelEvent,
  TimelineDeclineEvent,
  TimelineExpireEvent,
} from "./timelineEvents";

const requestDetailsDiv = document.getElementById("request-detail");
const request = JSON.parse(requestDetailsDiv.dataset.record);
const defaultQueryParams = JSON.parse(
  requestDetailsDiv.dataset.defaultQueryConfig
);

const overriddenComponents = {
  "TimelineFeed.eventComponent.D": TimelineDeclineEvent,
  "TimelineFeed.eventComponent.A": TimelineAcceptEvent,
  "TimelineFeed.eventComponent.E": TimelineExpireEvent,
  "TimelineFeed.eventComponent.X": TimelineCancelEvent,
};

ReactDOM.render(
  <InvenioRequestsApp
    request={request}
    defaultQueryParams={defaultQueryParams}
    overriddenCmps={overriddenComponents}
  />,
  requestDetailsDiv
);
