import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/normal-button.css';

const normalButton = props => {
    return(
        <button className="normal-button" onClick={props.click}>
            {props.value}
        </button>
    )
}

normalButton.propTypes = {
    value: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
}

export default normalButton