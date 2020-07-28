import React from 'react';
import { FooterBase } from './styles';
import { FooterText } from './components/FooterText';

function Footer() {
  return (
    <FooterBase>
      <p>
        <FooterText>Made by</FooterText>
        {' '}
        <a href="https://www.linkedin.com/in/jmnardes/">
          JMNardes
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
