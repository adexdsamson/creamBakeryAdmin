import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
//import { Col } from 'react-bootstrap';

//import Avatar from '../Avatar';

import classNames from 'classnames';

const AnnouncementCard = ({
  color,
  name,
  subname,
  value,
  className,
  buttonProps,  ...restProps
}) => {
  const classes = classNames(color, className);

  return (
    
      <div className={classes}>
        <div className="widget-content-wrapper text-white">
          <div className="widget-content-left">
            <div className="widget-heading">
              {name}
            </div>
            <div className="widget-subheading">
              {subname}
            </div>
          </div>
          <div className="widget-content-right">
            <div className="widget-numbers text-white">
              <span>
                {value}
              </span>
            </div>
          </div>
        </div>
      </div>
    
  );
};

AnnouncementCard.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
  subname: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
};

AnnouncementCard.defaultProps = {
  color: 'bg-midnight-bloom'
};

export default AnnouncementCard;
