import React from 'react';
import PageRoot from '../../../components/PageRoot';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return(
      <PageRoot>
        <h1>cadastro de categoria</h1>

      <from>

        <label>
          Nome da Categoria:
          <input type='text' /> 
        </label>

        <button>
          Cadastrar
        </button>

      </from>

        <Link to='/'>
            Ir pra Home
        </Link>
      </PageRoot>
    )
}

export default CadastroCategoria;