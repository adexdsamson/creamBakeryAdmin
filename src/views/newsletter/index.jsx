import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core';
import {connect} from 'react-redux';
import { postNewsletter, storageRef} from '../../utilities/firebase';
import {checkValidityInput} from '../../utilities/checkValidityInput';
import {Button} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import Input from '../../components/Input';
import { Grid, Typography, CircularProgress} from '@material-ui/core';
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
    isFormValid: false,
    success: false,
    isLoading: false,
    formError: false,
    imageURL: '',
    isUploading: false,
    progress: 0,
    form: {
      subject: {
        elementType: "input",
        elementConfig: {
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
      body: {
        elementType: "input",
        elementConfig: {
          type: "text"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touch: false
      },
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    let submitData = {};
    let validForm = true;
    for (let key in this.state.form) {
      submitData[key] = this.state.form[key].value;
      validForm = this.state.form[key].valid && validForm;
    };
    if(validForm) {
      let Data = {...submitData, img: this.state.imageURL}
      //this.props.postRecipe(Data);
      this.setState({ isLoading: false});
      alert('Post Succesful!');
    };
  };

  inputHandler = (e, form) => {
    const updatedForm = {
      ...this.state.form
    };
    const updatedFormElement = {
      ...updatedForm[form]
    };
    let formValid = true;
    updatedFormElement.value = e.target.value;
    updatedFormElement.valid = checkValidityInput(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touch = true;
    updatedForm[form] = updatedFormElement;

    for (let eachInput in updatedForm) {
      formValid = updatedForm[eachInput].valid && formValid;
      //console.log(formValid)
    }
    this.setState({ form: updatedForm, isFormValid: formValid });
  };



  render() {
    const { classes } = this.props;
    const { isFormValid, isLoading } = this.state;
    return ( 
      <DashboardLayout title="Newsletter" subtitle="" icon={<NewsIcon />}>
        <Grid className={classes.root} spacing={4}>
          <Card >
            <Typography variant="h5">Newsletter</Typography>
            <Grid>
              <form className="mt-3" onSubmit={this.handleSubmit}>
                <Input 
                  label="Subject" 
                  placeholder="Subject"
                  onChange={e => this.inputHandler(e, 'subject')}
                  {...this.state.form.subject.elementConfig}
                />
                <Row>
                  <Col sm="2">Number of Email</Col>
                  <Col sm="10">13 Emails</Col>
                </Row>
                <hr />
                <Input 
                  tag="textarea" 
                  className="form-control" 
                  label="Body" 
                  placeholder="Body"
                  onChange={e => this.inputHandler(e, 'body')}
                  {...this.state.form.body.elementConfig}
                />

                <Button type="submit" variant="outline-success" disabled={isFormValid && isLoading} className="pr-5 mt-4 pl-5">
                  {isFormValid && isLoading ? <CircularProgress size={24} className={classes.buttonProgress} /> : 'Post' }
                </Button>
              </form>
            </Grid>
          </Card>
        </Grid>
      </DashboardLayout>
    );
  }
}
 

export default compose(withStyles(styles), connect(null, {postNewsletter}))(Newsletter);