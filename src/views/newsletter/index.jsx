import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core';
import {connect} from 'react-redux';
import { postNewsletter} from '../../utilities/firebase';import renderInput from '../../components/renderInput';
import { Field } from 'redux-form';
import renderBody from '../../components/renderTextarea';
import Form from '../../components/Form';
import {Row, Col} from 'react-bootstrap';
import { Grid, Typography} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { CardBody as Card } from '../../components/Cards';
import { Dashboard as DashboardLayout } from '../../layout';
import {
  MailOutline as NewsIcon,
} from '@material-ui/icons';

const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: '100%'
  },
  buttonProgress: {
    color: green[500],
  }
});


class Newsletter extends Component {
  state = { 
    imageURL: '',
    isUploading: false,
    progress: 0,
  }

  handleSubmit = values => {
    this.setState({ isLoading: true });
    let submitData = {
      img: this.state.imageURL
    };
    this.props.postRecipe(submitData);
    this.setState({ isLoading: false});
    alert('Post Succesful!');
    
  };


  render() {
    const { classes, email } = this.props;
    
    const Email = this.state.isUploading ? email+'Emails' : 'None';
    return (
      <DashboardLayout title="Newsletter" subtitle="" icon={<NewsIcon />}>
        <Grid className={classes.root} spacing={4}>
          <Card>
            <Typography variant="body2">Newsletter</Typography>
            <Grid>
              <Form
                className="mt-3"
                onSubmit={values => this.handleSubmit(values)}
              >
                <Field
                  label="Subject"
                  placeholder="Subject"
                  type="text"
                  component={renderInput}
                />
                <Row>
                  <Col sm="2">
                    <Typography variant="h5">Number of Email</Typography>
                  </Col>
                  <Col sm="10">
                    <Typography variant="body1">{Email}</Typography>
                  </Col>
                </Row>
                <hr />
                <Field
                  name="body"
                  component={renderBody}
                  label="Body"
                  placeholder="Body"
                  type="text"
                />
              </Form>
            </Grid>
          </Card>
        </Grid>
      </DashboardLayout>
    );
  }
}
 

export default compose(withStyles(styles), connect(null, {postNewsletter}))(Newsletter);