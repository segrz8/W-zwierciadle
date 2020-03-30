import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = (props) => {
    return (
        <div onClick={props.handleMenu} className={props.menuActive ? 'Menu Menu--active' : 'Menu'}>
            <div className="Menu__list">
                <ul>
                    <li><Link to='/'>Strona główna</Link></li>
                    <li><Link to='/about'>O sobie</Link></li>
                    <li><Link to='/offer'>Oferta</Link></li>
                    <li><Link to='/dogs'>Psie sesje</Link></li>
                    <li><Link to='/family'>Rodzinne i Dziecięce</Link></li>
                    <li><Link to='/portraits'>Portrety </Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/contact'>Kontakt</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu
