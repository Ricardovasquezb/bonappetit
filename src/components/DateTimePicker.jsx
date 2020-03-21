import React, { useState, Component } from 'react';
import DatePicker from 'react-date-picker';
import {subDays, addDays, addMonths} from 'date-fns';
import "../assets/css/datetime-picker.css";
import 'react-calendar/dist/Calendar.css';

//import "react-datepicker/dist/react-datepicker.css";



const DateTimePicker = props => {
    
    const [startDate, setStartDate] = useState(new Date());
    const onChange = date =>{
        setStartDate(date)
    }
    const mode = props.mode;
    return (
        <div className='datetime-picker'>

            <span className='datetime-picker-span'>
                {props.label}
            </span>    
            <DatePicker className='datetime-picker-picker'
                value={startDate}
                onChange={onChange}
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
