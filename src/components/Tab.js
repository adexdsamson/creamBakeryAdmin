/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";
import {makeStyles,} from '@material-ui/core';


const Style = theme => ({
  indicator: {
    backgroundColor: "#ffffff"
  }
})

const ElevatedTabs = ({value, change, children}) => {
  const classes = makeStyles(Style)
  return (
    <React.Fragment>
      <Tabs
        variant={"fullWidth"}
        value={value}
        className={classes.indicator}
        style={{
          width: "100%",
          borderRadius: '4px',
          background: "#deb887",
          padding: 10,
          boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)",
          height: "100%",
          backgroundColor: "#deb887"
        }}
        onChange={change}
      >
        {children}
      </Tabs>
    </React.Fragment>
  );
};


ElevatedTabs.propTypes = {
  children: PropTypes.node,
  change: PropTypes.func,
  value: PropTypes.string
};

export default ElevatedTabs;