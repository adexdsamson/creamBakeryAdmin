import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
//import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    boxShadow: "0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03)",
    borderWidth: 0,
    transition: "all .2s",
    minWidth: "100%"
  }
});

const CardBody = ({children,action}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        {children}
      </CardContent>
      <CardActions>
        {action}
      </CardActions>
    </Card>
  );
};

CardBody.propTypes = {
  children: PropTypes.node,
  action: PropTypes.object
};

export default CardBody;