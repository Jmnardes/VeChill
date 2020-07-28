import React from 'react';
import styled from 'styled-components';
import PagErro from '../../assets/PagErro.png'

const Main = styled.main`
    display: flex;
    .Erro{
        display: block;
        margin: auto;
    }                                                                                      
`;

function erro() {
    return <Main><img className='Erro' src={PagErro} alt='VeChill' /></Main>
}

export default erro;