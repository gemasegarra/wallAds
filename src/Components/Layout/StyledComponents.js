import styled from 'styled-components';

export const HeaderBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  width: 100%;
  height: 80px;
  top: 0;
  z-index: 10;
  background: #e9e9e9;
  
  h1 {
    margin-right: auto;
    margin-left: 6rem;
    font-size: 2.5rem;
    color: #db7093;
  }

  p {
    margin-right: 6rem;
    font-size: 1.5rem;
    color: black;
  }
  `

  export const FooterBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  bottom: 0;
  width: 100%;
  height: 85px;
  background: #F6F6F6;
  font-size: 0.8rem;
  a {
    color: #db7093;
    text-decoration: none;
  }
  & a:visited {
    color: #db7093;
  }
  `