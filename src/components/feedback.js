import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 275,
    display: 'inline-block'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ReviewCard = ({Views}) => {
  const classes = useStyles();


  return (
    <div>
      {Views.map(view => (
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
             {view.name}
            </Typography>
            <Typography variant="h5" component="h2">
              {view.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}


export default ReviewCard