import React from 'react';
import { Box , Typography, Card, CardMedia, CardContent, CardActions, Button, makeStyles} from '@material-ui/core';
import smart from 'smart-truncate';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    display: 'inline-block'
  },
});

const SingleCat = ({views, click}) => {
  const classes = useStyles();
  return (
  <div style={{width: '100%'}}>
    {views.map(view => (
      <Box key={view.id} component='div' p={1} m={1} display='inline'>
        <Card  className={classes.card}>
          <CardMedia 
            component='img'
            alt='recipe image'
            height='140'
            image={view.img}
          />
          <CardContent>
            
            <Typography variant="h3">{view.title}</Typography>
            <span>
              <Typography variant='body2'>#{view.price}</Typography> 
            </span>
            <Typography variant="body1">{smart(view.body, 100)}</Typography>
          </CardContent>
          <CardActions>
            <Button 
              size="small" 
              onClick={id => click(id)} 
              color="primary"
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    ))}
  </div>
);}

export default SingleCat;