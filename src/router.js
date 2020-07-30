import React from 'react';
import './index.css';
import Home from './pages/Home';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/cadastro/video' component={CadastroVideo} />
            <Route exact path='/cadastro/categoria' component={CadastroCategoria} />
        </Switch>
    </BrowserRouter>
)

export default Router;