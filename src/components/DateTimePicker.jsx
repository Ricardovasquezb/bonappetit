import React, { useState, Component } from 'react';
import DatePicker from 'react-date-picker';
import {subDays, addDays, addMonths} from 'date-fns';
import "../assets/css/datetime-picker.css";
import 'react-calendar/dist/Calendar.css';

//import "react-datepicker/dist/react-datepicker.css";



const DateTimePicker = ({ value, onChange, label, minDate, maxDate, placeholder }) => {
    return (
        <div className='datetime-picker'>

            <span className='datetime-picker-span'>
                {label}
            </span>    
            <DatePicker className='datetime-picker-picker'
                value={value}
                onChange={onChange}
                minDate={subDays(new Date(), minDate)}
                maxDate={addMonths(new Date(), maxDate)}
                placeholderText={placeholder}
                showDisabledMonthNavigation
                showTimeSelect
            />
        </div>
    );
  }

export default DateTimePicker;
