import React from 'react'
// import './MainPage.scss';
import MainSlider from './Components/MainSlider'
import Main from './Components/Main';

const MainPage = () => {
    return (
        <div className="MainPage">
            <MainSlider handleArrow={this.handleArrow} />
            <Main />
        </div>
    )
}

export default MainPage
