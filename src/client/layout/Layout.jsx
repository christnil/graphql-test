import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

import Footer from './Footer';
import NavBar from './NavBar';

import AuthorList from '../author/AuthorList';
import AuthorDetails from '../author/AuthorDetails'
import BookList from '../books/BookList';
import BookDetails from '../books/BookDetails'

// import valueIn from '../../utils/valueIn';

class Layout extends Component {
  render() {
    return (
      <div className={css(styles.layout)}>
        <header>
          <NavBar />
        </header>
        <Route path="/authors" exact component={AuthorList} />
        <Route path="/authors/:authorKey" component={AuthorDetails} />
        <Route path="/books" exact component={BookList} />
        <Route path="/books/:bookKey" component={BookDetails} />
        <Route path="/*/b/:bookKey" component={BookDetails} />
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
