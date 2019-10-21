/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from 'prop-types';
import Tabs from "@material-ui/core/Tabs";


const ElevatedTabs = ({value, change, children}) => {
  
  return (
    <React.Fragment>
      <Tabs
        variant={"fullWidth"}
        value={value}
        onChange={change}
      >
        {children}
      </Tabs>
    </React.Fragment>
  );
};

ElevatedTabs.getTheme = muiBaseTheme => ({
  MuiTabs: {
    root: {
      width: "100%",
      borderRadius: muiBaseTheme.spacing.unit,
      background: "linear-gradient(60deg, #ab47bc, #8e24aa)",
      padding: 10,
      boxShadow: "0px 3px 15px rgba(34, 35, 58, 0.5)"
    },
    indicator: {
      height: "100%",
      borderRadius: muiBaseTheme.spacing.unit,
      backgroundColor: "rgba(255, 255, 255, .2)"
    }
  },
  MuiTab: {
    root: {
      textTransform: "initial",
      margin: `0 ${muiBaseTheme.spacing.unit * 2}px`,
      minWidth: 0,
      [muiBaseTheme.breakpoints.up("md")]: {
        minWidth: 0
      }
    },
    label: {
      fontWeight: "normal",
      letterSpacing: 0.5,
      color: "#ffffff"
    },
    labelContainer: {
      paddingLeft: 10,
      paddingRight: 10
    }
  }
});

ElevatedTabs.propTypes = {
  children: PropTypes.node,
  change: PropTypes.func,
  value: PropTypes.string
};

export default ElevatedTabs;