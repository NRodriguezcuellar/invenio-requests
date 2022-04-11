// This file is part of InvenioRequests
// Copyright (C) 2022 CERN.
//
// Invenio RDM Records is free software; you can redistribute it and/or modify it
// under the terms of the MIT License; see LICENSE file for more details.

import React from "react";
import PropTypes from "prop-types";

export const EventBody = ({ content, format }) => {
  return format === "html" ? (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  ) : (
    content
  );
};

EventBody.propTypes = {
  content: PropTypes.string,
  format: PropTypes.string,
};

EventBody.defaultProps = {
  content: "",
  format: "",
};
