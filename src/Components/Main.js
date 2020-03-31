import React from 'react'
import './Main.scss';
import Footer from '../Components/Footer'

import img1 from '../img/beach.jpg';
import img1s from '../img/beachS.jpg';
import img2 from '../img/church.jpg';
import img2s from '../img/churchS.jpg';
import img3 from '../img/lake.jpg';
import img3s from '../img/lakeS.jpg';

const Main = () => {

    const imgSet1 = [
        { path: img1, pathS: img1s, },
        { path: img2, pathS: img2s, },
        { path: img3, pathS: img3s, },
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
            <p className="Main__dummy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus reprehenderit amet sapiente commodi repellendus laborum quidem iusto natus asperiores! Odit, quod. In, autem optio quae nisi quisquam, nulla tempore esse praesentium, voluptatibus reiciendis velit. Voluptatem quae possimus excepturi magnam eligendi magni. Temporibus, earum in! Eveniet a aut veniam ducimus doloremque optio vero sapiente unde? Nobis sit mollitia et nemo delectus aut, voluptates sunt pariatur aliquid totam saepe perferendis beatae. Expedita inventore, necessitatibus cum quas accusantium modi voluptate cupiditate fugiat. Nisi veniam accusantium magni odio, natus, nihil assumenda est eaque ducimus aliquam fugit nam ipsa officia nesciunt!</p>
            <div className="Main__photos">
                {photos}
            </div>
            <Footer />
        </div>
    )
}

export default Main
