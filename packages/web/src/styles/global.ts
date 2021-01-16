import { createGlobalStyle } from 'styled-components';
// import 'react-toastify/dist/ReactToastify.css';
import colors from 'styles/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    position: relative;
    color: ${colors.ink};
    background-color: ${colors.darkWhite};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, textarea {
    font-family: 'Source Sans Pro', sans-serif !important;
    font-size: 16px;
  }
  a, button {
    outline: none;
  }
    /* Font Sizes */
  h1 {
    font-size: 42px;
    line-height: 50px;
  }
  h2 {
    font-size: 36px;
    line-height: 40px;
  }
  h3 {
    font-size: 30px;
    line-height: 36px;
  }
  h4 {
    font-size: 26px;
    line-height: 32px;
  }
  h5 {
    font-size: 24px;
    line-height: 30px;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600&display=swap');
`;