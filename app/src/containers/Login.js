import React, { Component } from 'react';
import { Grid, Form, Button, Input } from 'semantic-ui-react';
import { Formik } from 'formik';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import { execAuthenticate } from '../actions/services/api-auth';


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showFlashMessage: false
        }
    }

    componentWillMount() {
        // this.props.getJobs()
        // this.props.getCompany()
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.auth.data && nextProps.auth !== this.props.auth) {
        //     if (nextProps.auth.data.status === 200) {
        //         this.setState({ isLogin: true });
        //     } else {
        //         this.setState({ showError: true });
        //     }
        //     if (this.state.actionsOfForm) {
        //         this.state.actionsOfForm.setSubmitting(false);
        //     }
        // }
    }
    onSubmit = () => {
        this.baseForm.submitForm();
    };
    onBaseSubmit = (values, actions) => {
        this.props.authenticate(values);
    };
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.baseForm.submitForm();
        }
    }
    render() {
        console.log(this.props)
        // const loginLayout = (
        //   <Grid className="container-login transition-item">
        //       <Grid.Row className="main-form">
        //           <Grid.Column width={10} className="login-name">
        //               <span>Login Form</span>
        //           </Grid.Column>
        //           <Grid.Column width={16} className="login-body">
        //               <Formik
        //                   ref={con => {
        //                       this.baseForm = con;
        //                   }}
        //                   // initialValues={}
        //                   onSubmit={this.onBaseSubmit}
        //                   // validate={Validation}
        //                   render={props =>
        //                       <Form autoComplete="off" onKeyPress={() => props.handleKeyPress} onSubmit={props.handleSubmit} loading={props.isSubmitting}>
        //                           <Grid>
        //                               <Grid.Row>
        //                                   <Grid.Column width={16}>
        //                                       <Input label="USERNAME" name="rq_Username" placeholder="Username" />
        //                                   </Grid.Column>
        //                                   <Grid.Column width={16}>
        //                                       <Input type="password" label="PASSWORD" name="rq_Password" placeholder="Password" />
        //                                   </Grid.Column>
        //                                   <Grid.Column width={4}>
        //                                   </Grid.Column>
        //                                   <Grid.Column width={8}>
        //                                       <Button type="submit" labelPosition="left" icon="share square" className="btn-action login" onClick={props.handleSubmit} content="Entra" />
        //                                   </Grid.Column>
        //                               </Grid.Row>
        //                           </Grid>
        //                       </Form>
        //                   }
        //               />
        //           </Grid.Column>
        //       </Grid.Row>
        //   </Grid>
        // )
        return (
            <div>

            </div>
        );
    }
}

Login.propTypes = {
    authenticate: PropTypes.func,
    auth: PropTypes.object,
    initialValues: PropTypes.object
};

const mapStateToProps = state => {
    const authObj = state.auth.reducerAuth;

    return {
        auth: authObj.authenticate,
        location: state.location
    };
};
const mapDispatchToProps = dispatch => ({
    authenticate: data => {
        //dispatch(execAuthenticate(data));
        //dispatch({type: 'RTE_PREDICTED', payload:{}})
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
