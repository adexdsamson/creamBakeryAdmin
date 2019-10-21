
require('template.css');

    <!DOCTYPE>
    <html>
      <head>
        <title>Receipt Mail</title>
        <body>
          <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="x_panel">
                    <div class="x_title">
                      <h2>Cream Bakery Invoice </h2>
                    </div>
                    <div class="x_content">
                      <section class="content invoice">
                        <div class="row">
                          <div class="col-xs-12 invoice-header">
                              <h1>
                                <i class="fa fa-globe"></i> Invoice.
                                <small class="pull-right">Date: {invoiceDate}</small>
                              </h1>
                          </div>
                        </div>
                        <div class="row invoice-info">
                          <div class="col-sm-4 invoice-col">
                            From
                            <address>
                              <strong>Cream Bakery.</strong>
                              <br/>200 Okeowo-somrin, Ifako-Gbagada
                              <br/>Lagos State, Nigeria.
                              <br/>Phone: + (234) 81223445674
                              <br/>Email: creambakery.com
                            </address>
                          </div>
                          <div class="col-sm-4 invoice-col">
                            To
                            <address>
                              <strong>{name}</strong>
                              <br/>{address}
                              <br/>Email: {email}
                            </address>
                          </div>
                          <div class="col-sm-4 invoice-col">
                            <b>Invoice Number: {invoiceNumber} </b>
                            <br/>
                            <br/>
                            <b>Order ID:</b> {orderId}
                            <br/>
                            <b>Payment Due:</b> {paymentDate}
                            <br/>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-xs-12 table">
                            <table class="table table-striped">
                              <thead>
                                <tr>
                                  <th>Qty</th>
                                  <th>Product</th>
                                  <th>Serial #</th>
                                  <th className="width: 59%">Description</th>
                                  <th>Subtotal</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{quantity}</td>
                                  <td>{product}</td>
                                  <td>455-981-221</td>
                                  <td>
                                    {description}
                                  </td>
                                  <td>{price}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div class="row">

                          <div class="col-xs-6">
                            <p class="lead">Payment Methods:</p>
                            <img src="images/paystack.png" alt="paystack"/>
                          </div>
                          <div class="col-xs-6">
                            
                            <div class="table-responsive">
                              <table class="table">
                                <tbody>
                                  <tr>
                                    <th className="width:50%">Subtotal:</th>
                                    <td>{price}</td>
                                  </tr>
                                  <tr>
                                    <th>Shipping:</th>
                                    <td>{shipping}</td>
                                  </tr>
                                  <tr>
                                    <th>Total:</th>
                                    <td>{totalPrice}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </body>
      </head>
    </html>
  '
}

module.exports = { Receipt };