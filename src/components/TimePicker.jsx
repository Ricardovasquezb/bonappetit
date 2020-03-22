import React, {useState, Component} from 'react'
import TimePicker from 'react-time-picker'
import {subDays, addHours, addMonths} from 'date-fns';
import '../assets/css/time-picker.css'

const Time_Picker = props =>{
    
    const [startDate, setStartDate] = useState(new Date());

    const onChange = time =>{
        setStartDate(time)
    }
    return(

        <div className='time-picker'>
            <span className='time-picker-span'>
                {props.label}
            </span> 
            <TimePicker className='time-picker-picker'
                onChange={onChange}
                value={startDate}
                minTime={addHours(new Date(), props.minTime)}
            />
        </div>
    );
}

export default Time_Picker;