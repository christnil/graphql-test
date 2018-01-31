import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class BookPage extends Component {
  render() {
    return (
      <div className={css(styles['book-page'])}>
        Book
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
