import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { Dashboard as DashboardLayout } from '../../layout';
import { CardBody as Card } from '../../components/Cards';
import {clearOrder} from '../../store/action';
import {fetchOrder} from '../../utilities/firebase';
import OrderView from '../../presentation/Order';
//import { dispatchOrder } from '../../store/action';
//import { SubscriberOrder } from  '../../api';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import {
  ShoppingCart as ShoppingIcon
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  }
});

class Order extends Component {
  state = { value: 0 }

  componentDidMount() {
    this.props.fetchOrder();
    //SubscriberOrder((err, change) => this.setState({ order: change }));
  }
  //componentWillUnmount(){
    //this.props.clearOrder();
 // }
  render() { 
    const { classes } = this.props;
    
    return ( 
      <DashboardLayout title="Order" subtitle icon={<ShoppingIcon />}>
        <div className={classes.root}>
          <Grid>
            <Card>
              <Typography variant="body2">Order list</Typography>
              <div className="mt-4"></div>
              <OrderView />
            </Card>
          </Grid>
        </div>
      </DashboardLayout>
     );
  }
}

Order.propTypes = {
  classes: PropTypes.object.isRequired
};


 
export default compose(connect(null, {fetchOrder,clearOrder}), withStyles(styles))(Order);