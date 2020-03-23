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



const Dropdown = props => {
    
    const [startItem, setItem] = useState(null);

    const onChange = item =>{
        setItem(item)
    }
    
    return (
        <div className='time-picker'>
            <span className='time-picker-span'>
                {props.label}
            </span> 
            <Select
                placeholder={props.placeholder}
                // isMulti // usar para seleccionar mas de una opcion
                isSearchable
                value={startItem}
                onChange={onChange}
                hideSelectedOptions
                options={props.options}
                menuShouldBlockScroll  
                styles={customStyles}
            />
        </div>
        
    );
};


export default Dropdown;