import React from 'react';
import {
  Popover,
} from 'react-bootstrap';



const Popovered = ({ id, content, placement, title }) => {
  return (
    <Popover id={id} content={content} />
  );
};



export default Popovered;