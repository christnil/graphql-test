import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
import BookDetails from '../books/BookDetails';

class BookPage extends Component {
  render() {
    return (
      <div className={css(styles['book-page'])}>
        <BookDetails id={this.props.match.params.id} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'book-page': {
    color: 'black',
    padding: '200px',
  },
});

export default BookPage;
