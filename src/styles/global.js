import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Kobe from "../assets/fonts/Kobe.woff"

export const BOXSHADOW = `
  box-shadow: 0px -7px 35px rgba(0, 0, 0, 0.25);
`;

export const FLEXCENTER = `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

export const GlobalStyles = createGlobalStyle`

  @font-face Kobe {
    src: local('Kobe'), local('Kobe'),
    url(${Kobe}) format('ttf'),
    font-family: 'Kobe';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Kobe';
  }

  p, a {
    font-family: 'Helvetica';
  }
`
