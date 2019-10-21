import React from 'react';
import './index.css';




const SUbBar = ({appIcon, title, subtitle}) => (
  <div className="app-main_outer">
    <div className="app-main_inner">
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className="page-title-icon text-center">
              {appIcon}
            </div>

            <div>
              {title}
              <div className="page-title-subheading">
                {subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SUbBar;