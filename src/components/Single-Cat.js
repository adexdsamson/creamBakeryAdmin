import React from 'react';
import { Grid , Typography} from '@material-ui/core';


const SingleCat = ({views}) => (
  <Grid container md={6}>
    {views.map(view => (
      <div className="snack bg-white h-100 align-content-stretch">
        <figure className="m-0">
          <img src={view.img} alt='...' className="img-fluid"/>
        </figure>
        <div className="snack-inner-text py-3 px-4">
          <span className="snack-price">{view.price}</span>
          <Typography variant="h3">{view.title}</Typography>
          <p className="lead">{view.body}</p>
        </div>
      </div>
    ))}
  </Grid>
);

export default SingleCat;