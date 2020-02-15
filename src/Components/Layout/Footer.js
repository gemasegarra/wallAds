import React, { Component } from 'react';
import styled from 'styled-components';

const FooterBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  bottom: 0;
  width: 100%;
  height: 85px;
  background: #F6F6F6;
  font-size: 0.7rem;
  a {
    color: #db7093;
    text-decoration: none;
  }
  & a:visited {
    color: #db7093;
  }
  `

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