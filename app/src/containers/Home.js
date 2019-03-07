import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { execShadedGetJobs } from '../actions/ui/api-jobs';
import { Popup, Loader, Table, Label, Icon, Card, Container, Grid, Menu, Input, Tab, Dropdown, Button, Segment, List, Divider, Image } from 'semantic-ui-react';
import {PieChart} from 'react-easy-chart';

class Customer extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
      const locationType = this.props.location.type;
      document.body.classList.add((locationType === 'REDIR_ROOT' || locationType === 'RTE_HOME') ? 'hone': '');
    }

    componentWillUnMount(){
      document.body.classList.remove('hone');
    }

    render() {

        return (
            <div id="customer" className={'transition-item'}>
              <Grid>
                <Grid.Row>
                  <Grid.Column textAlign="center">
                    มูลค่ารวม: <b>888,888.00</b>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Grid centered>
                <Grid.Row>
                   <Grid.Column textAlign="center">
                     <PieChart
                        padding={0}
                        size={120}
                        innerHoleSize={80}
                        data={[
                          { key: 'A', value: 100, color: '#aaac84' },
                          { key: 'B', value: 200, color: '#49B649' },
                          { key: 'C', value: 50, color: '#e3a51a' }
                        ]}
                      />
                   </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
        )
    }

}


Customer.contextTypes = { router: PropTypes.object }

Customer.propTypes = {};

const mapStateToProps = state => {
    //const jobState = state.services.reducerJobs

    return {
        //jobs: jobState.all.list,
        location: state.location
    }
};

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    null, { withRef: true }
)(Customer);
