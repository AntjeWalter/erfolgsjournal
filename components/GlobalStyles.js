import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 10px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        //background-image: url("/assets/plant-background.jpg");
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
