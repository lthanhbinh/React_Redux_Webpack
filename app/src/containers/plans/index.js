import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Loader, Table, Label, Icon, Card, Container, Grid, Menu, Input, Tab, Dropdown, Button, Segment, List, Divider, Image } from 'semantic-ui-react'

class Plans extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        //this.props.getJobs()
        //this.props.getCompany()
    }

    render() {

        return (
            <div id="predicted" className="transition-item">
                <Container>
                    <h2>Plan page</h2>
                </Container>
            </div>
        )
    }

}


Plans.contextTypes = {router: PropTypes.object}

Plans.propTypes = {
};

const mapStateToProps = state => {
    //const jobState = state.services.reducerJobs
    return {
        //jobs: jobState.all.list,
        //company: jobState.company.list,
        //rowSelected: jobState.setRowSelected.rowSelected,
        //numberRow: jobState.setRowSelected.numberRow
    }
};

const mapDispatchToProps = dispatch => ({


});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null, { withRef: true }
)(Plans);
