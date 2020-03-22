import React, {useState, Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselView = props => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt={props.title}
                />
                <Carousel.Caption>
                    <h3>{props.label}</h3>
                    <p>{props.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselView;