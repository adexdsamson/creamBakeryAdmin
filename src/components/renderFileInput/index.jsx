import React from 'react';
import {FormGroup, FormLabel, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';
import FileUploader from 'react-firebase-file-uploader';
import {storageRef} from '../../utilities/firebase';


const renderFileUpdate = ({
  label,
  isUploading,
  progress,
  meta: { touched, error, warning },
  ...input
}) => (
  <FormGroup as={Row} controlId="fileUpload">
    <FormLabel column sm="2">
      {label}
    </FormLabel>
    <Col sm="10">
      {isUploading ? (
        <p>Progress: {progress}</p>
      ) : (
        <FileUploader
          accept="image/*"
          randomizeFilename
          storageRef={storageRef}
          {...input}
        />
      )}
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </Col>
  </FormGroup>
);

renderFileUpdate.propTypes = {
  onUploadError: PropTypes.object,
  onUploadStart: PropTypes.object,
  onUploadSuccess: PropTypes.object,
  onProgress: PropTypes.object
};

export default renderFileUpdate;