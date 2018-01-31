import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class ErrorPage extends Component {
  render() {
    return (
      <div className={css(styles['error-page'])}>
        Error
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'error-page': {
    color: 'black',
    padding: '200px',
  },
});

export default ErrorPage;
