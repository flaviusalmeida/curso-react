import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import LivroBox from './Livro';
import AutorBox from './Autor';
import './index.css';

ReactDOM.render(
  <BrowserRouter >
    <div>
        <App>
            <Route exact path="/" component={Home} />
            <Route path="/autor" component={AutorBox}/> 
            <Route path="/livro" component={LivroBox}/> 
        </App>
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
