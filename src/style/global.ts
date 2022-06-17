import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
  }
  :root{
    --color-bg-black: #000;

    --bg-color: #fff;
    --bg-color-primary: #3936C0;
    --bg-color-secondary: rgba(255,255,255,14%);
    --text-color-error: #c53030;
    --border-color: #565656;
    --border-color-white-clear: #F6D9DC;
  }
  body{
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    background-color: #565656;
    color: var(--bg-color);
  }
  `