import React, { useState, Component } from 'react';
import DatePicker from 'react-datetime-picker';
import {subDays} from 'date-fns';
import "../assets/css/datetime-picker.css"



const DateTimePicker = props => {
    
    const [startDate, setStartDate] = useState(null);
    const mode = props.mode;
    return (
        <div className='datetime-picker'>

            <span className=''>
                {props.label}
            </span>    
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={subDays(new Date(), props.minDate)}
                placeholderText={props.Placeholder}
            />
        </div>
    );
  }

export default DateTimePicker;
