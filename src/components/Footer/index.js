import React from 'react';
import { FooterBase } from './styles';
import imersao from '../../assets/imersao.png';
import alura from '../../assets/alura.png';
import github from '../../assets/github.png';

function Footer() {
  return (
    <FooterBase>
      <p>
        <a href="https://github.com/Jmnardes/VeChill">
          <img className='github' src={github} alt='github' />
        </a>
        <a href="https://www.alura.com.br/imersao-react">
          <img className='imersao' src={imersao} alt='imersao' />
        </a>
        <a href="https://www.alura.com.br/imersao-react">
          <img className='alura' src={alura} alt='alura' />
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
