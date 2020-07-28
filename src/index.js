import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

//Desafio substituir a Página 404 pelo jogo da Imersão gameDev
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  < BrowserRouter>
    <Switch>
      <Route path ="/" component= {Home} exact />
      <Route path ="/Cadastro/video" component= {CadastroVideo} />
      <Route path ="/Cadastro/categoria" component= {CadastroCategoria} />
      <Route component={Pagina404}/>
    </Switch>
 </BrowserRouter>,
 
  document.getElementById('root')
);


