import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import PageTransition from 'react-router-page-transition'
import Header from '../components/Header'
import WorkingShade from '../components/WorkingShade'
import Home from './Home'
import Plans from './plans/index'


const AppWrapper = ({ children, allowAdmin, location}) => {
    try {
        console.log(location.type)
        return (
            <div>
                <Header location={location}/>
                <PageTransition>
                  {selectChild(location.type, allowAdmin)}
                </PageTransition>
            </div>
        )
    } catch (error) {
        throw error;
    }
}

function selectChild(routeType, allowAdmin) {
    console.log(routeType)
    if(routeType === 'RTE_HOME' || routeType === 'REDIR_ROOT') {
        return <Home />
    } else if(routeType === 'RTE_PLANS') {
      return <Plans />
    }
}

AppWrapper.propTypes = {
    location: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        location: state.location
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppWrapper);
