import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

class HomePage extends Component {
  render() {
    return (
      <div className={css(styles['home-page'])}>
        Home
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'home-page': {
    color: 'black',
    padding: '200px',
  },
});

export default HomePage;
