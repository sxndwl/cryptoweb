import { createGlobalStyle } from 'styled-components'
import ManropeWoff from "../fonts/manrope-v13-latin-regular.woff";
import ManropeWoff2 from "../fonts/manrope-v13-latin-regular.woff2";

export default createGlobalStyle`
@font-face {
    font-family: 'Manrope';
    src: url(${ManropeWoff2}) format('woff2'), url(${ManropeWoff}) format('woff');
}
* {
    padding: 0;
    margin: 0;
}

input {
    font-family: 'Manrope';
    background: none;
    outline: none;
    border: none;
    color: white;
    width: 107px;
    height: 25px;
    font-size: 16px;
    margin-left: 5px;
}

svg {
    cursor: pointer;
}

body {
    font-family: 'Manrope';
    background-color: #151517;
}
`