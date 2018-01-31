import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class BookList extends Component {
  render() {
    if (!this.props.data.books) {
      return false;
    }
    return (
      <div className="books">
        {this.props.data.books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default graphql(gql`
  query BooksQuery {
    books {
      title
      id
    }
  }
`)(BookList);
