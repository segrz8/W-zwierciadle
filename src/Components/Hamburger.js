import React from 'react'
import './Hamburger.scss';

const Hamburger = (props) => {
    return (
        <div className="Hamburger" onClick={props.handleMenu}>
            {props.menuActive ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
    )
}

export default Hamburger
