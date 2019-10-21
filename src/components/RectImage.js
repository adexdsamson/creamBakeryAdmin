
import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import userImage from '../assets/img/users/icon-72x72.png';

const style = {
  image: {
    "float": "left",
    "width": "40%",
    "margin": "0 30px 20px 0"
  },
  object_fit_fill: {
    "OObjectFit": "cover",
    "objectFit": "cover"
  }
}

const RectImage = ({src, className, width, height, style, ...props}) => {
  const classes = classNames(className, style);
  return (
    <div className={classes.image}>
      <img 
        className={classes.object_fit_fill} 
        src={src}
        size={{width: width, height: height, ...style}}
        {...props}
      />
    </div>
  );
};

RectImage.propTypes = {
  src: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  style: PropTypes.object
};

RectImage.defaultProps = {
  src: userImage,
  size: 100,
  style: {}
};


export default RectImage;