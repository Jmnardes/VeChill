import React from 'react';
import Logo from '../../assets/logo.png'
import './Menu.css'
import Button from '../Button'
//import ButtonLink from '../Menu/components/ButtonLink/index';

function Menu() {
    return (
    <nav className='Menu'>
        <a className='/'>
            <img className='Logo' src={Logo} alt='Chill Sight' />
        </a>

        <Button as='a' className='ButtonLink' href='/'>
            Novo vídeo
        </Button>
    </nav>
)};

export default Menu;