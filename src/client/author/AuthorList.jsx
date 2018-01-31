import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AuthorList extends Component {
  render() {
    if (!this.props.data.authors) {
      return false;
    }
    return (
      <div className="authors">
        {this.props.data.authors.map(author => (
          <li key={author.id}>
            <Link to={`/authors/${author.id}`}>{author.name}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default graphql(gql`
  query AuthorsQuery {
    authors {
      name
      id
    }
  }
`)(AuthorList);
