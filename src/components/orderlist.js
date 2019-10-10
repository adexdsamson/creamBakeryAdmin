import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OrderList = ({id, name }) => (
  
  <ListGroup>
    <Link to={`/orderlist/${id}`} className='link'>
      <ListGroup.Item key={id}>
        {name}
      </ListGroup.Item>
    </Link>
  </ListGroup>   
)

export default OrderList;