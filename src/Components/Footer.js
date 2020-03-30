import React from 'react'
import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer">
            <p>W zwierciadle</p>
            <div className="Footer__location">
                <p>Bytom</p>
                <p>Śląsk</p>
                <p>Polska</p>
                <p>Świat</p>
            </div>
            <p>Tel. +48 604 546 994</p>
            <p><a href="mailto: Wzwierciadle@wir.pl">e-mail: Wzwierciadle@wir.pl</a></p>
            <div className="Footer__icons">
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Wzwierciadle">
                    <i class="fab fa-facebook-square"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/wzwierciadle/">
                    <i class="fab fa-instagram-square"></i>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="mailto: Wzwierciadle@wir.pl">
                    <i class="fas fa-envelope-square"></i>
                </a>
            </div>
        </div>
    )
}

export default Footer
