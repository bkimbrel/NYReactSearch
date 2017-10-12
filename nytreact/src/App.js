import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Main from './containers/main';
import Header from './components/header';
import SavedArticles from './containers/save'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Header/>
        <div>
          <Route exact path='/' component={Main}/>
          <Route exact path='/savedarticles' component={SavedArticles}/>
        </div>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
