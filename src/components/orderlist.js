import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderList = ({views}) => (
  <ListGroup>
    {views.map(view => (
      <Link to={`/orderlist/${view.id}`} className='link'>
        <ListGroup.Item key={view.id}>
          {view.name}
        </ListGroup.Item>
      </Link>
    ))}
  </ListGroup>   
)

export default OrderList;