import React from 'react';
import imgMain from '../../assets/img/musicflix.png'
import './menu.css'
import Button from './components/button';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={imgMain} />
            </Link>

            <Button as={Link} to="/cadastro/video">
                Novo Video
            </Button>
        </nav>
    )
}

export default Menu;