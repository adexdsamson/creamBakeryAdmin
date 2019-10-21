import React from 'react';
import OrderList from '../../components/orderlist';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';


const mapStateToProps = state => ({ order: state.Order });

const ConnectedList = ({order}) => (
  <div>
    {order.length ? <OrderList views={order}/> : 
      <Typography variant="h5">No Order </Typography>
    }
  </div>
);

const OrderView = connect(mapStateToProps)(ConnectedList);

export default OrderView;