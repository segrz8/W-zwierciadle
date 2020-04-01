import React from 'react'
import './Dogs.scss';
import { Link } from 'react-router-dom';
import simpleParallax from 'simple-parallax-js'

import img1 from '../img/beach.jpg';
import img1s from '../img/beachS.jpg';
import img2 from '../img/aircraft.jpg';
import img2s from '../img/aircraftS.jpg';
import img3 from '../img/lake.jpg';
import img3s from '../img/lakeS.jpg';
import img4 from '../img/flower.jpg';
import img4s from '../img/flowerS.jpg';
import img5 from '../img/church.jpg';
import img5s from '../img/churchS.jpg';
import img6 from '../img/glacier.jpg';
import img6s from '../img/glacierS.jpg';

const imgSet1 = [
    { path: img1, pathS: img1s, name: 'Aga' },
    { path: img2, pathS: img2s, name: 'Ula' },
    { path: img3, pathS: img3s, name: 'Ewa' },
    { path: img4, pathS: img4s, name: 'Ola' },
    { path: img5, pathS: img5s, name: 'Iza' },
    { path: img6, pathS: img6s, name: 'Ala' },
]

const photos = imgSet1.map(item => {
    return (
        <Link to={`/${item.name}`}>
            <div className="Dogs__photo" key={item.path}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </div>
        </Link>
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
                    <source media="(min-width: 461px)" srcSet={img1} />
                    <img src={img1s} className="Dogs__mainPhoto thumbnail d-block w-100" alt="..." />
                </picture>
                <div className="Dogs__photos">
                    {photos}
                </div>
            </div>
        )
    }
}

export default Dogs
