import React from 'react';
import imgMain from '../../assets/img/LogoMain.png'
import './menu.css'
import Button from './components/button';

const Menu = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={imgMain} />
            </a>

            <Button href="/">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;