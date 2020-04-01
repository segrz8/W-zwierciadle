import React from 'react'
import './Main.scss';
import Footer from '../Components/Footer'

import img2 from '../img/aircraft.jpg';
import img2s from '../img/aircraftS.jpg';
import img4 from '../img/flower.jpg';
import img4s from '../img/flowerS.jpg';
import img6 from '../img/glacier.jpg';
import img6s from '../img/glacierS.jpg';

const Main = () => {

    const imgSet1 = [
        { path: img4, pathS: img4s, },
        { path: img2, pathS: img2s, },
        { path: img6, pathS: img6s, },
    ]

    const photos = imgSet1.map(item => {
        return (
            <div className="Main__photo" key={item.path}>
                <picture>
                    <source media="(min-width: 461px)" srcSet={item.path} />
                    <img src={item.pathS} className="d-block w-100" alt="..." />
                </picture>
            </div>
        )
    })

    return (
        <div className="Main">
            {/* <p className="Main__dummy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit amet sapiente commodi repellendus laborum quidem iusto natus asperiores! Odit, quod. In, autem optio quae nisi quisquam, nulla tempore esse praesentium, voluptatibus reiciendis velit. Voluptatem quae possimus excepturi magnam eligendi magni. Temporibus, earum in! Eveniet a aut veniam ducimus doloremque optio vero sapiente unde? Nobis sit mollitia et nemo delectus aut, voluptates sunt pariatur aliquid totam saepe perferendis beatae. Expedita inventore, necessitatibus cum quas accusantium modi voluptate cupiditate fugiat. Nisi veniam accusantium magni odio, natus, nihil assumenda est eaque ducimus aliquam fugit nam ipsa officia nesciunt!</p> */}
            <div className="Main__photos">
                {photos}
            </div>
            <Footer />
        </div>
    )
}

export default Main
