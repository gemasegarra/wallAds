import React from 'react';
// import { BrowserRouter, Route} from 'react-router-dom';

import SignIn from './Components/Auth/SignIn.js';
import Footer from './Components/Footer.js' 

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
    }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
      <SignIn></SignIn>
      <Footer></Footer>
    </>
  );
}

export default App;
