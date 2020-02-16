import React, { Component } from 'react';

import { HeaderBar } from './StyledComponents'

class Header extends Component {
  render() {
    return (
      <HeaderBar>
        <h1>NodePop!</h1> 
        <p>Buy and sell anything you want</p>
      </HeaderBar>
    )
  }
};

export default Header;