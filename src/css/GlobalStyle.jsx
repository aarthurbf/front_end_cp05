import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        scroll-behavior: smooth;
        list-style: none;
        text-decoration: none;
    }

    body{
        background-color: var(--color6);
    }

    :root{
        --color1: #034C8C;
        --color2: #0367A6;
        --color3: #2B96D9;
        --color4: #4AA2D9;
        --color5: #4AB0D9;
        --color6: #F4F4F4;
        --color7: #FFFFFFFF;
        --color8: #000000FF,
        --transition: 0.5s;
    }
`

export default GlobalStyle