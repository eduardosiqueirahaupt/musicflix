import React from 'react'
import PageDefault from '../../../components/pageDefault'
import { Link } from 'react-router-dom'


const CadastroVideo = () => {
    return (
        <PageDefault>
           Cadastro de CadastroVideo
            <Link to='/cadastro/categoria'>
                Cadastrar Categoria
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;