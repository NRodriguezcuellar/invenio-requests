import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";
import { EventBody } from "./EventBody";
import { Image } from "react-invenio-forms";
import PropTypes from "prop-types";

export class TimelineActionEvent extends Component {
  render() {
    const { event, iconName, iconColor, userAction } = this.props;

    return (
      <Feed.Event className="request-status-event">
        <Feed.Label>
          <Icon
            name={iconName}
            className="request-status-icon"
            size="large"
            color={iconColor}
          />
          {userAction && (
            <Image
              src="/static/images/square-placeholder.png"
              as={Image}
              rounded
              avatar
            />
          )}
        </Feed.Label>
        <Feed.Content>
          <div className="flex">
            {userAction && <b className="mr-5">{event.created_by.name}</b>}
            <EventBody
              content={event?.payload?.content}
              format={event?.payload?.format}
            />
          </div>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

TimelineActionEvent.propTypes = {
  event: PropTypes.object.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string,
  userAction: PropTypes.bool,
};

TimelineActionEvent.defaultProps = {
  iconColor: "grey",
  userAction: true,
};
