import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import 'semantic-ui-css/semantic.min.css';
import {createDefaultRedirector} from '../router'

import AppWrapper from './AppWrapper'
import Login from './Login'

class App extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
    }

    render() {
        return renderFunction(this.props)
    }
}

const renderFunction = ({location, defaultRedirector}) => {
    if(location.type === 'RTE_LOGIN') {
      return <Login />
    } else {
      return <AppWrapper/>
    }
}

App.propTypes = {
    defaultRedirector: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
      location: state.location
    }
}

const mapDispatchToProps = (dispatch) => ({
    defaultRedirector: createDefaultRedirector(dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null, { withRef: true }
)(App);
