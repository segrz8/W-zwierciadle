import React from 'react'
import './Dogs.scss';
import { Link } from 'react-router-dom';
import simpleParallax from 'simple-parallax-js'

import img2 from '../img/aircraft.jpg';
import img2s from '../img/aircraftS.jpg';
import img4 from '../img/flower.jpg';
import img4s from '../img/flowerS.jpg';
import img6 from '../img/glacier.jpg';
import img6s from '../img/glacierS.jpg';
import img7 from '../img/switzerland.jpg';

const imgSet1 = [
    { path: img2, pathS: img2s, name: 'Ula' },
    { path: img4, pathS: img4s, name: 'Ola' },
    { path: img6, pathS: img6s, name: 'Ala' },
    { path: img7, pathS: img7, name: 'Ala' },
]

const photos = imgSet1.map(item => {
    return (
        <div className="Dogs__photo" key={item.path}>
            <Link to={`/${item.name}`}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </Link>
        </div >
    )
})

class Dogs extends React.Component {

    componentDidMount = () => {
        const image = document.getElementsByClassName('thumbnail');
        new simpleParallax(image);
    }

    render() {
        return (
            <div className="Dogs">
                {/* <div className="Dogs__mainPhoto"></div> */}
                {/* <img className="Dogs__mainPhoto thumbnail" src={img1} alt="..." /> */}
                <picture>
                    <source media="(min-width: 461px)" srcSet={img7} />
                    <img src={img7} className="Dogs__mainPhoto thumbnail d-block w-100" alt="..." />
                </picture>
                <div className="Dogs__photos">
                    {photos}
                </div>
            </div>
        )
    }
}

export default Dogs
