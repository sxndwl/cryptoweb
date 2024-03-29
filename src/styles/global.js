import { createGlobalStyle } from 'styled-components'
import ManropeWoff from "../fonts/manrope-v13-latin-regular.woff";
import ManropeWoff2 from "../fonts/manrope-v13-latin-regular.woff2";
import ManropeWoffRu from "../fonts/Manrope-regular.woff";
import ManropeWoff2Ru from "../fonts/Manrope-regular.woff2";      

export default createGlobalStyle`
@font-face {
    font-family: 'Manrope';
    src: url(${ManropeWoff2}) format('woff2'), url(${ManropeWoff}) format('woff');
}
@font-face {
    font-family: 'ManropeRu';
    src: url(${ManropeWoff2Ru}) format('woff2'), url(${ManropeWoffRu}) format('woff');
}
.ru {
    font-family: 'ManropeRu';
    text-align: center;
}
* {
    padding: 0;
    margin: 0;
}

html{
    scrollbar-width: none;
    ::-webkit-scrollbar { width: 0; }
}

button {
    background: none;
    outline: none;
    border: none;
}

input {
    font-family: 'Manrope';
    background: none;
    outline: none;
    border: none;
    color: ${props => props.theme.colors.textColor};
    width: 180px;
    height: 25px;
    font-size: 16px;
    margin-left: 5px;
}

svg {
    cursor: pointer;
}

body {
    font-family: 'Manrope';
    background-color: ${props => props.theme.colors.bodyColor};
}
`