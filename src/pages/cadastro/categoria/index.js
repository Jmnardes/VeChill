import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return(
      <PageRoot>
        <h1>cadastro de categoria</h1>

        <Link to='/'>
            Ir pra Home
        </Link>
      </PageRoot>
    )
}

export default CadastroCategoria;