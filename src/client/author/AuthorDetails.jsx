import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AuthorDetails extends Component {
  render() {
    if (!this.props.data.author) {
      return false;
    }
    return (
      <div className="author">
        <h1>{this.props.data.author.name}</h1>
        {this.props.data.author.books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default graphql(
  gql`
    query AuthorQuery ($key: ID!) {
      author(key: $key) {
        name
        id
        books {
          title
          id
        }
      }
    }
  `, {
    options: props => ({
      variables: {
        key: props.match.params.authorKey,
      },
    }),
  }
)(AuthorDetails);
