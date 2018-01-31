import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import valueIn from '../../utils/valueIn';

class NavBar extends Component {
  render() {
    const navLinks = valueIn(this.props, 'data.navLinks', []);
    console.log(navLinks, this.props);
    if (!navLinks) {
      return false;
    }
    return (
      <div className="App">
        {navLinks.map(link => (
          <NavLink
            key={link.id}
            to={link.url}
            className={css(styles['nav-link'])}
            activeClassName={css(styles['nav-link--selected'])}
            isActive={(a, b) => console.log('ab', a, b)}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  'nav-link': {
      color: 'black',
      padding: '8px 16px',
  },

  'nav-link--selected': {
      color: 'blue',
  },
});

export default graphql(gql`
  query NavLinksQuery {
    navLinks {
      id
      text
      url
    }
  }
`)(NavBar);
