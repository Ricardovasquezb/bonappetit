import React, {useState, Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../assets/css/carousel.css'



const CarouselView = props => {


    var Data = [];
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    Data = props.source;

    return(
        <div className='carousel'> 
            <Carousel activeIndex={index} onSelect={handleSelect} >
                {Data.map((item) => (
                    <Carousel.Item className='carousel-item'>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.alt}
                        />
                        <Carousel.Caption className='carousel-caption'>
                            <h3 className='carousel h3'>{item.label}</h3>
                            <p className='carousel p'>{item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
                }
            </Carousel>
        </div>
    );
}

export default CarouselView;