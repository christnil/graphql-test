import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';
// mport { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

// import valueIn from '../../utils/valueIn';

class Footer extends Component {
  render() {
    return (
      <div className={css(styles.footer)}>
        Footer
      </div>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    color: 'white',
  },
});

export default Footer;
