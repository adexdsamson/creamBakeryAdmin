import React from 'react';
import { Link } from 'react-router-dom';

const CreatorLink = props => {
  /* eslint-disable jsx-a11y/anchor-has-content */
  return (
    <Link to='www.adeolaadediran.com' target="_blank" rel="noopener noreferrer" {...props} className='link'/>
  );
};

export default CreatorLink;
