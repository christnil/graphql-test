import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class BookDetails extends Component {
  render() {
    if (!this.props.data.book) {
      return false;
    }
    return (
      <div className="book">
        <h1>{this.props.data.book.title}</h1>
        <p>Rating: {this.props.data.book.rating}</p>
        <p>Year: {this.props.data.book.year}</p>
        <Link to={`/authors/${this.props.data.book.author.id}`}>{this.props.data.book.author.name}</Link>
      </div>
    );
  }
}

export default graphql(
  gql`
    query BookQuery ($key: ID!) {
      book(key: $key) {
        title
        rating
        year
        author {
          name
          id
        }
      }
    }
  `, {
    options: props => ({
      variables: {
        key: props.match.params.bookKey,
      },
    }),
  }
)(BookDetails);
