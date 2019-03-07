import React from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'

const shade = ({shaded}) =>
    <div>
        {(shaded ? <div className="working-shade"><div><Loader active inline='centered' inverted className="ui-loader"/></div></div> : null)}
    </div>

shade.propTypes = {shaded: PropTypes.bool.isRequired}

export default shade
