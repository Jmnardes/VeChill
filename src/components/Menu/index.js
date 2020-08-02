import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import plus from '../../assets/plus.png';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link className="LinkLogo" to="/">
        <img className="Logo" src={Logo} alt="HunterXFlix" />
      </Link>

      <Link className="LinkCadastroVideo" to="/cadastro/video">
        <img className="CadastroVideo" src={plus} alt="CadastroVideo" title="Novo vídeo" />
      </Link>
    </nav>
  );
}

export default Menu;
