import React from 'react';
import '../assets/css/dashboard-box.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DashboardBox = props =>{
    
    var Data = [];

    Data = props.source;

    return (
        <div className='dashboard-box'>
        <script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script>
        {
            Data.map((item) => (    
                <div class="col-md-4">
                    <div class="mb-3 widget-chart">
                        
                        <div className="icon-wrapper">
                            <FontAwesomeIcon icon={item.icon} size="4x" color={item.iconColor}/>
                        </div>

                        <div>
                            <h2 class="widget-numbers">{item.value}</h2>
                        </div>

                        <div>
                            <h4 class="widget-subheading">{item.header}</h4>
                        </div>

                        <div className="widget-description text-success">
                            <FontAwesomeIcon icon={item.iconFooter} />
                            <span className="pl-1">
                                {item.footer}
                            </span>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

export default DashboardBox;