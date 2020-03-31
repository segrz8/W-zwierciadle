import React from 'react'
// import './MainPage.scss';
import MainSlider from './MainSlider'
import Main from './Main';

const MainPage = (props) => {
    return (
        <div className="MainPage">
            <MainSlider handleArrow={props.handleArrow} />
            <Main />
        </div>
    )
}

export default MainPage
