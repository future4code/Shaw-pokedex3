import React from "react";
import Router from "./routers/Router"
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}
`

function App () {

  return(
    <div>
      <GlobalStyle/>
      <Router/>
    </div>

  )
}

export default App;