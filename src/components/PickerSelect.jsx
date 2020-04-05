import React, {useState, Component} from 'react';
import Select from 'react-select';
import '../assets/css/picker-select.css';


const customStyles = {

    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'red' : 'black',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
    }
}



const Dropdown = ({ value, onChange, options, placeholder, label }) => {
    return (
        <div className='time-picker'>
            <span className='time-picker-span'>
                {label}
            </span> 
            <Select
                placeholder={placeholder}
                // isMulti // usar para seleccionar mas de una opcion
                isSearchable
                value={value}
                onChange={onChange}
                hideSelectedOptions
                options={options}
                menuShouldBlockScroll  
                styles={customStyles}
            />
        </div>
        
    );
};


export default Dropdown;