import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class NotFoundPage extends Component {
  render() {
    return (
      <div className={css(styles['not-found-page'])}>
        NotFound
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'not-found-page': {
    color: 'black',
    padding: '200px',
  },
});

export default NotFoundPage;
