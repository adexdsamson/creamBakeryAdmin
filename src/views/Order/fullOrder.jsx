import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import './fullDetail.css';
import {selectOrderId} from '../../store/selector';
import Response from '../../components/res';
import { connect } from 'react-redux';
import {Table} from 'react-bootstrap';
import {Typography} from  '@material-ui/core';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Dashboard as DashboardLayout } from '../../layout';
import {
  ShoppingCart as ShoppingIcon
} from '@material-ui/icons';

class FullOrder extends Component {
  resp = () => {
    
  }

  comfirmation = (data) => {
    //sends axios post to the backend for whatsapp and email comfirmation
    //axios.post('/api/invoice_mail', data)
  }

  render() { 
  
    const {
      address, 
      lg, 
      name, 
      cake, 
      color, 
      email,
      budget,
      id,
      occasion,
      size,
      phone,
      date
    } = this.props;

    return ( 
      <DashboardLayout title='Order'subtitle icon={<ShoppingIcon />}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className='x_panel'>
                <div className='X_title mb-3'>
                  <Typography variant="h2">Cream Bakery </Typography>
                </div>
                <div className='x_content'>
                  <section className='content invoice'>
                    <Row>
                      <Col xs={12} className='invoice-header'>
                        <Typography variant="h6" className='mb-3'>
                          Order
                          <Typography variant="body2" className='floatRight'>
                            Date: {date}
                          </Typography>
                        </Typography>

                      </Col>
                    </Row>
                    <Row className='invoice-info'>
                      <Col sm={6} className='invoice-col mb-3'>
                        <Typography variant='body1'>
                          Customer's address: {address}
                        </Typography>
                      </Col>
                      <Col sm={6} className='invoice-col'>
                        <Typography variant="body1">
                          <b>Order ID:</b> {id}
                        </Typography>
                        <br />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className='table'>
                        <Table striped hover size="sm">
                          <thead>
                            <tr>
                              <th>
                                <Typography variant="subtitle1">
                                  Quantity
                                </Typography>
                                </th>
                              <th>
                                <Typography variant="subtitle1">
                                  Customer
                                </Typography>
                                </th>
                              <th className='width:59%'>
                                <Typography variant="subtitle1">
                                  Description
                                </Typography>
                              </th>
                              <th>
                                <Typography variant="subtitle1">
                                  Budget
                                </Typography>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td>
                                <Typography variant="subtitle2">
                                  Name: {name}
                                </Typography>
                                <br />
                                <Typography variant="subtitle2">
                                  email: {email}
                                </Typography>   
                                <br />
                                <Typography variant="subtitle2">
                                  Phone: {phone}
                                </Typography>   
                                <br />
                                <Typography variant="subtitle2">
                                  local Gov: {lg}
                                </Typography>  
                              </td>
                              <td>
                                <Typography variant="subtitle2">
                                  Cake: {cake}
                                </Typography>
                                <br />
                                <Typography variant="subtitle2">
                                  Occasion: {occasion}
                                </Typography>
                                <br />
                                <Typography variant="subtitle2">
                                  Size: {size}
                                </Typography>
                                <br />
                                <Typography variant="subtitle2">
                                  Color: {color}
                                </Typography>
                              </td>
                              <td>
                                <Typography variant="subtitle2">
                                  {budget}
                                </Typography>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Button variant='' ocClick={this.resp}>Response</Button>
                        <Button
                          variant='success' 
                          className='floatRight'
                        >
                          Comfirm
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </div>
              </div>
            </Col>
          </Row>
          <Response />
        </Container>
      </DashboardLayout>
    );
  }
}

const makeMapStateToProps = () => {
  const getOrderState = selectOrderId()
  return (state, ownProps) => getOrderState(state, ownProps.match.params); 
}
 
export default compose(withRouter,connect(makeMapStateToProps))(FullOrder);