import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import AuthorList from './author/AuthorList';
import AuthorDetails from './author/AuthorDetails'
import BookList from './books/BookList';
import BookDetails from './books/BookDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/authors">Authors</NavLink>
        </header>
        <Route path="/authors" exact component={AuthorList} />
        <Route path="/authors/:authorKey" component={AuthorDetails} />
        <Route path="/books" exact component={BookList} />
        <Route path="/books/:bookKey" component={BookDetails} />
        <Route path="/*/b/:bookKey" component={BookDetails} />
      </div>
    );
  }
}

export default App;
