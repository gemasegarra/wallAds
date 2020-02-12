import React from 'react';
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
      <div className="test">Hey</div>
    </>
  );
}

export default App;
