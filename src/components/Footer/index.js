import React from 'react';
import { FooterBase } from './styles';
import imersao from '../../assets/imersao.svg';
import github from '../../assets/github.svg';
import wikipedia from '../../assets/wikipedia.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';

function Footer() {
  return (
    <FooterBase>
      <div>
        <a href="https://www.alura.com.br/imersao-react">
          <img className="imersao" src={imersao} alt="imersao" title="Imersão React da Alura" />
        </a>
        <a href="https://github.com/Jmnardes/VeChill">
          <img className="github" src={github} alt="github" title="Repositório do projeto" />
        </a>
        <a href="https://pt.wikipedia.org/wiki/Hunter_%C3%97_Hunter">
          <img className="wikipedia" src={wikipedia} alt="wikipedia" title="HunterXHunter Wikipedia" />
        </a>
        <a href="https://www.linkedin.com/in/jmnardes/">
          <img className="linkedin" src={linkedin} alt="linkedin" title="Linkedin do autor" />
        </a>
        <a href="https://twitter.com/JMNardes">
          <img className="twitter" src={twitter} alt="twitter" title="Twitter do autor" />
        </a>
      </div>
    </FooterBase>
  );
}

export default Footer;
