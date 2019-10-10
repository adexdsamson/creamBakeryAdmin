import React from 'react';
import PropTypes from 'prop-types';

import { Card, Button } from 'react-bootstrap';

import Avatar from '../Avatar';

import classNames from 'classnames';

const AnnouncementCard = ({
  color,
  header,
  avatar,
  avatarSize,
  name,
  date,
  text,
  className,
  buttonProps,
  ...restProps
}) => {
  const bgColor = `bg-${color}`;
  const classes = classNames(bgColor, className);

  return (
    <Card className={classes} {...restProps}>
      {header && typeof header === 'string' ? (
        <Card.Header className={bgColor}>{header}</Card.Header>
      ) : (
        header
      )}
      <Card.Body className="d-flex flex-wrap flex-column align-items-center justify-content-center">
        <Avatar size={avatarSize} src={avatar} />
        <Card.Text className="text-center">
          <strong className="d-block">{name}</strong>
          <small className="text-muted">{date}</small>
        </Card.Text>
        <Card.Text className="text-center">{text}</Card.Text>

        
      </Card.Body>
    </Card>
  );
};

AnnouncementCard.propTypes = {
  color: PropTypes.string,
  header: PropTypes.node,
  avatar: PropTypes.string,
  avatarSize: PropTypes.number,
  name: PropTypes.string,
  date: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element,
};

AnnouncementCard.defaultProps = {
  color: 'gradient-announcement',
  avatarSize: 60,
};

export default AnnouncementCard;
