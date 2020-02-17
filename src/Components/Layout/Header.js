import React, { Component } from 'react';

import { HeaderBar, StyledLink, StyledNavLink } from './StyledComponents'


class Header extends Component {
  render() {
    return (
      <HeaderBar>
        <StyledLink to='/adlist'>NodePop!</StyledLink>
        <p>Buy and sell anything you want</p>
        <StyledNavLink to="/adlist" activeClassName="active">
          Ad List
        </StyledNavLink>
        <StyledNavLink to="/createad" activeClassName="active">
          Create ad
        </StyledNavLink>
      </HeaderBar>
    )
  }
};

export default Header;