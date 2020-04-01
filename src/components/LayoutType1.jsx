import React from 'react';
import "../assets/css/layout-type-1.css"

const LayoutType1 = props => {
    const mode = props.mode
    return (
        <div className={`layout-type-1 ${mode}`}>
            <div className='Box-1 vertical-line'>
                {props.boxOne}
            </div>
            <div className='Box-1'>
                {props.boxTwo}
            </div>
        </div>
    );
}

export default LayoutType1;
