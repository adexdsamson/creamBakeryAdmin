import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Orderlist from '../components/orderlist';
import { SubscriberOrder } from '../api';
import Page from '../components/Page';
import { dispatchOrder } from '../store/action';



class OrderList extends Component {

  state = {
    order: []
  }

  componentDidMount() {
    SubscriberOrder((err, change) => this.setState({order: change}));
  }
  
  render() { 
    let { id, name, } = this.props.OrderList.order;
    return ( 
      <Page
        title='Order List'
        breadcrumbs={[{ name: 'order List', active: true }]}>
        <Container>
          <Row>
            <Col>
              {this.props.OrderList.order.length ?
                <Orderlist
                  id={id}
                  name={name}
                />
                :
                <h2>No Order </h2>
              }
            </Col>
          </Row>
        </Container>
      </Page>
     );
  }
};

const mapStateToProps = ({ OrderList }) => {
  return { OrderList }
}
 
export default connect(mapStateToProps, {dispatchOrder})(OrderList);