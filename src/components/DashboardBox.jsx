import React from 'react';
import '../assets/css/dashboard-box.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faAngleUp,
    faAngleDown,
    faArrowLeft,
    faArrowRight,
    faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

const DashboardBox = props =>{
    return (
        <div class="col-md-4">
            <div class="mb-3 widget-chart">

                <h2 class="widget-numbers">46</h2>
                <h4 class="widget-subheading">Today Clients</h4>
                <div className="widget-description text-success">
                    <FontAwesomeIcon icon={faAngleUp} />
                    <span className="pl-1">
                        176
                    </span>
                </div>
            </div>
        </div>
    );
}

export default DashboardBox;