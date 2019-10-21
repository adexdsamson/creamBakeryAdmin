import React from 'react';
import {FormGroup, FormLabel, Row, Col, FormControl} from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';


const Input = ({type, src, placeholder, tag: Tag, className, label, ...props}) => {
  const classes = classNames(className);
  return (
    <FormGroup as={Row} controlId="controledInput">
      <FormLabel column sm="2">
        {label}
      </FormLabel>
      <Col sm="10">
        <Tag className={classes} type={type} placeholder={placeholder} {...props}/>
      </Col>
    </FormGroup>
  );
};

Input.propTypes = {
  tag: PropTypes.elementType,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string
};

Input.defaultProps = {
  tag: FormControl,
  type: 'text'
}

export default Input;