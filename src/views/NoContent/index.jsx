import React, { Component } from 'react';
import './index.css';
import {Typography} from '@material-ui/core';



class NoContent extends Component {
  state = {  }
  render() { 
    return ( 
      <div id="noContent">
        <div className="noContent">
          <div className="noContent-404">
            <h3>Oops!</h3>
          </div>
          <h2>
            <Typography variant="body1">
              {this.props.title}
            </Typography>
          </h2>
          <p>{this.props.body}</p>
        </div>
      </div>
    );
  }
}
 
export default NoContent;