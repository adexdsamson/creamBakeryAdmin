import React from 'react';
import OrderList from '../../components/orderlist';
import { connect } from 'react-redux';
import {getOrderState} from '../../store/selector';
import NoContent from '../../views/NoContent';


const mapStateToProps = state => ({ order: getOrderState(state) });

const ConnectedList = ({order}) => (
  <div>
    {order.length ? <OrderList views={order}/> : 
      <NoContent title="No Order availiable"/>
    }
  </div>
);

const OrderView = connect(mapStateToProps)(ConnectedList);

export default OrderView;