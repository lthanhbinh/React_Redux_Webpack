import React from 'react'
import {NavLink} from 'redux-first-router-link'
import PropTypes from 'prop-types'
import { Icon, Popup, Grid, Image, Container } from 'semantic-ui-react'

const Footer = ({userName}) =>
    <div>
        <footer>
            <Container>
                <div className="row">
                    <div className="copyRight">
                        © 2018 PandoLogic Inc, All Rights Reserved
                    </div>
                </div>
            </Container>
        </footer>
    </div>

export default Footer
