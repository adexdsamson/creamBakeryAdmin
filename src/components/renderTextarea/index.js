import React from 'react';
import {FormGroup, FormLabel, Row, Col} from 'react-bootstrap';


const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <FormGroup as={Row} controlId="controledInput">
    <FormLabel column sm="2">
      {label}
    </FormLabel>
    <Col sm="10">
      <textarea className="form-control" {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Col>
  </FormGroup>
);

export default renderField;