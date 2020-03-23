import React, {useState, Component} from 'react';
import Select from 'react-select';
import '../assets/css/picker-select.css';


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
                options={props.options}
               
            />
        </div>
        
    );
};


export default Dropdown;