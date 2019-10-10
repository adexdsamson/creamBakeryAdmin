import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './fullDetail.css';
import Page from '../components/Page';
import Response from '../components/res';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';



class FullOrder extends Component {
  state = { res: false, data: [] }
  resp = () => {
    this.setState({res : true})
  }
  renderButton() {
   // const { buttonText } = this.props;
    //swip button  clicked
  }

  comfirmation = (data) => {
    //sends axios post to the backend for whatsapp and email comfirmation
    //axios.post('/api/invoice_mail', data)
  }



  render() { 
    const showResponse = this.state.res;
    return ( 
      <Page title='Order' breadcrumbs={[{ name: 'Order list / Full Details'}]}>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12}>
              <div className='x_panel'>
                <div className='X_title'>
                  <h2>Cream Bakery </h2>
                </div>
                <div className='x_content'>
                  <section className='content invoice'>
                    <Row>
                      <Col xs={12} className='invoice-header'>
                        <h3 className='mb-3'>
                          Order
                          <small className='floatRight small'>
                            Date: 16/09/2019
                          </small>
                        </h3>

                      </Col>
                    </Row>
                    <Row className='invoice-info'>
                      <Col sm={6} className='invoice-col'>
                        from:
                        <address>
                          Okeowo-somorin
                        </address>
                      </Col>
                      <Col sm={6} className='invoice-col'>
                        <b>Order ID:</b> 12bdggh76
                        <br />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} className='table'>
                        <table className='table table-striped'>
                          <thead>
                            <tr>
                              <th>Quantity</th>
                              <th>Product</th>
                              <th className='width:59%'>
                                Description
                              </th>
                              <th>Budget</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td>455-981-221</td>
                              <td>
                                
                              </td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12}>
                        <Button variant='' ocClick={this.resp}>Response</Button>
                        <Button
                          variant='success' className='floatRight'>
                          Comfirm
                        </Button>
                      </Col>
                    </Row>
                  </section>
                </div>
              </div>
            </Col>
          </Row>
          <Response show={showResponse} />
        </Container>
      </Page>
    );
  }
}

const mapStateToProps = state => {
  return state
}
 
export default connect(mapStateToProps, null)(FullOrder);