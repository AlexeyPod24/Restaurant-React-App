import React from 'react';

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body, html {
    min-width: 100%;
    min-height: 100vh;
    
    }

    body {
      font-family: 'Karla', sans-serif;
      margin: 0;
    height: 100vh;
    font-family: 'Inter', sans-serif;
    }
    
   
    img {
        max-width: 100%;
        display: block;
    }
  
    a {
      color: inherit;
      text-decoration: none;
    }
`

export default GlobalStyles