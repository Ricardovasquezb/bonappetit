import React from 'react';
import "../assets/css/layout-type-1.css"

const LayoutType1 = props => {
    return (
        <div className="layout-type-1">
            <div className='Box-1'>
                {props.boxOne}
            </div>
            <div className='Box-1'>
                {props.boxTwo}
            </div>
            
        </div>
    );
}

export default LayoutType1;
