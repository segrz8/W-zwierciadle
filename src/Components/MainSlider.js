import React from 'react'
import './MainSlider.scss';
import Carousel from 'react-bootstrap/Carousel';

import img1 from '../img/beach.jpg';
import img1s from '../img/beachS.jpg';
import img2 from '../img/church.jpg';
import img2s from '../img/churchS.jpg';
import img3 from '../img/lake.jpg';
import img3s from '../img/lakeS.jpg';

const MainSlider = (props) => {

    const imgSet1 = [
        { path: img1, pathS: img1s, },
        { path: img2, pathS: img2s, },
        { path: img3, pathS: img3s, },
    ]

    const carouselItems1 = imgSet1.map(item => {
        return (
            <Carousel.Item key={item.path}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Carousel.Item>
        )
    })

    return (
        <div className="MainSlider">
            <div className="MainSlider__carousel">
                <Carousel controls={false} indicators={false}>
                    {carouselItems1}
                </Carousel>
            </div>
            <div className="MainSlider__arrow">
                <i onClick={props.handleArrow} class="fas fa-arrow-circle-down"></i>
            </div>
        </div>
    )
}

export default MainSlider
