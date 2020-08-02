import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
    background-color: var(--blackLighter);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 3%;
    padding-right: 3%;
    ${({ paddingAll }) => css`
    padding: ${paddingAll}
    `}
`;

function PageRoot({ children, paddingAll }) {
  return (
    <>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

PageRoot.defaultProps = {
  children: '',
  paddingAll: '0',
};

PageRoot.propTypes = {
  children: PropTypes.string,
  paddingAll: PropTypes.string,
};

export default PageRoot;
