import React from 'react'
import {NavLink} from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { Icon, Popup, Grid, Image, Container } from 'semantic-ui-react'
import headerLogo from "../../assets/images/logo.png";

const Header = ({userName}) =>
<header>
    <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <a href="#">Back</a>
            </Grid.Column>
            <Grid.Column>
                <h4>การลงทุน</h4>
                <NavLink to={'/plans'}>Plans</NavLink>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Container>
</header>

export default Header
