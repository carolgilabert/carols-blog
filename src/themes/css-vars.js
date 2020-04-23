import { createGlobalStyle } from 'styled-components';

const CssVars = createGlobalStyle`
    :root {
        /* Fonts */
        --headerFont: 'Avalanche';
        --fontSizeH1: 3rem;
        --fontSizeH2: 1.6rem;

        @media (min-width: 400px) {
            --fontSizeH1: 4rem;
            --fontSizeH2: 2rem;
        }

        @media (min-width: 900px) {
            --fontSizeH1: 4.5rem;
            --fontSizeH2: 2.4rem;
        }

        /* Colours */
        --backgroundColour: #41444d;
        --primaryColour: #e39ec1;
        --accentColour: #77567a;
        --highContrastColour: #fff;

        /* Spacing */
        --pageMargin: 0 1rem;
        --homeDrawingPaddingLeft: 0.5rem;


        @media (min-width: 400px) {
            --pageMargin: 0 3rem;
            --homeDrawingPaddingLeft: 2rem;
        }

        @media (min-width: 900px) {
            --pageMargin: 0 auto;
            --homeDrawingPaddingLeft: 3rem;
        }
    }

`;

export default CssVars;
