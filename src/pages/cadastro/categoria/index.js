import React from 'react'
import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


const CadastroCategoria = () => {
    return (
        <PageDefault>
           Cadastro de CadastroCategoria
            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;