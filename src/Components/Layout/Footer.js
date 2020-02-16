import React, { Component } from 'react';

import { FooterBar } from './StyledComponents'
class Footer extends Component {
  render() {
    return (
      <FooterBar>
        <p>Coded by <a href='https://github.com/gemasegarra'> Gema S.</a> | 2020</p>
      </FooterBar>
    )
  }
};

export default Footer;