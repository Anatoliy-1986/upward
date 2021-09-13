import { createGlobalStyle } from "styled-components";
import Roboto from "./components/fonts/Roboto.ttf";


const GlobalStyles = createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), url(${Roboto}) format('truetype');
  }
`;

export default GlobalStyles;
