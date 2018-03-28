import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import Footer from './Footer';
import NavBar from './NavBar';

import AuthorList from '../author/AuthorList';
import AuthorDetails from '../author/AuthorDetails';
import BookList from '../books/BookList';
import Book from '../pages/Book';
import Home from '../pages/Home';
import ErrorPage from '../pages/Error';
import NotFound from '../pages/NotFound';

// import valueIn from '../../utils/valueIn';

class Layout extends Component {
  render() {
    return (
      <div className={css(styles.layout)}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/authors" exact component={AuthorList} />
          <Route path="/authors/:authorKey" component={AuthorDetails} />
          <Route path="/books" exact component={BookList} />
          <Route path="/*/b/:id" component={Book} />
          <Route path="/error" exact component={ErrorPage} />
          <Route component={NotFound} />
        </Switch>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  layout: {
    width: '960px',
    'margin-left': 'auto',
    'margin-right': 'auto',
  },
});

export default Layout;
