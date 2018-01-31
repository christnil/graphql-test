import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class AuthorPage extends Component {
  render() {
    return (
      <div className={css(styles['author-page'])}>
        Author
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'author-page': {
    color: 'black',
    padding: '200px',
  },
});

export default AuthorPage;
