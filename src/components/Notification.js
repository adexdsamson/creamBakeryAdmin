import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Notification = ({ notificationsData }) => {
  return (
    notificationsData &&
    notificationsData.length &&
    notificationsData.map(({ id, header, body, color }) => {
      return <Card key={id} bg={color} text='white' >
        <Card.Header>{header}</Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    })
  )
};

Notification.propTypes = {
  notificationsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.ID,
      avatar: PropTypes.string,
      message: PropTypes.node
    })
  ),
};

Notification.defaultProps = {
  notificationsData: [],
};

export default Notification;