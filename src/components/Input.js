import React from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';
import classNames from 'classnames';



const TextFieldInput = ({
  input, 
  label, 
  className, 
  type,
  meta: { touched, error, warning},
  ...props
}) => {
  const classes = classNames(className)
  return (
    <div className="mt-3">
      <TextField 
        className={classes}
        label={label}
        {...input}
        type={type}
        {...props}
      />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )
};

TextFieldInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};

export default TextFieldInput;