import React from 'react';
import ChefList from '../../components/chef';
import { connect } from 'react-redux';
import {getChefState} from '../../store/selector';
import NoContent from '../../views/NoContent';

const mapStateToProps = state => ({ chef: getChefState(state) });

const ConnectedList = ({chef}) => (
  <div>
    {chef.length ? <ChefList views={chef} /> : 
      <div className="mt-4">
        <NoContent title="No Chef availiable"/>
      </div>
    }
  </div>
);

const ChefView = connect(mapStateToProps)(ConnectedList);

export default ChefView;