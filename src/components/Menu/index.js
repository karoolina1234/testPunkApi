import React from 'react';
import { HeaderPage } from './styles'
import { Link } from 'react-router-dom';
import {BsFillCircleFill} from 'react-icons/bs'

export default function Header(props) {
    return (
        <React.Fragment>
            <HeaderPage>
            <img src="http://derodecor.vteximg.com.br/arquivos/ids/196222/PP324-1.16M_6.jpg?v=636935332460600000"/>
                <div>
                    <Link to="/">Listagem</Link>
                    <Link to="/register">Cadastro</Link>
                </div>

            </HeaderPage>
        </React.Fragment >
    );
}

