import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {connect} from 'react-redux';
import {Delete} from '@material-ui/icons';
import {DeleteBlog} from '../utilities/firebase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import smart from 'smart-truncate';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: 'inline-block',
    margin: '12px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function BlogReviewCard({views}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (id) => {
    setExpanded({id: !expanded});
  };

  const handleDelete = (id) => {
    console.log(id)
    DeleteBlog(id)
  }

  return (
    <Grid className="d-inline">
    {views.map(view => (
        <Card key={view.id} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="blog" className={classes.avatar}>
                B
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={view.title}
            subheader={view.date}
          />
          <CardMedia
            className={classes.media}
            image={view.img}
            title="..."
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {smart(view.body, 100)}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              onClick={handleDelete} 
              aria-label="add to favorites">
              <Delete />
            </IconButton>
            
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={view => handleExpandClick(view.id)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                {view.body}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Grid>
  );
}


export default connect(null, {DeleteBlog})(BlogReviewCard)