import React, { useState, Component } from 'react';
import DatePicker from 'react-datetime-picker';
import {subDays, addDays, addMonths} from 'date-fns';
import "../assets/css/datetime-picker.css";
import 'react-calendar/dist/Calendar.css';



const DateTimePicker = props => {
    
    const [startDate, setStartDate] = useState(new Date());
    const mode = props.mode;
    return (
        <div className='datetime-picker'>

            <span className='datetime-picker-span'>
                {props.label}
            </span>    
            <DatePicker className='datetime-picker-picker'
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={subDays(new Date(), props.minDate)}
                maxDate={addMonths(new Date(), props.maxDate)}
                placeholderText={props.Placeholder}
                showDisabledMonthNavigation
                showTimeSelect
            />
        </div>
    );
  }

export default DateTimePicker;
