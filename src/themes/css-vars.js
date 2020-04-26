import { createGlobalStyle } from 'styled-components';

const CssVars = createGlobalStyle`
    :root {
        /* Fonts */
        --bodyFont: 'Dosis';
        --headerFont: 'Avalanche';
        --bodyFontSize: 14px;
        --fontSizeSmall: 0.8rem;
        --fontSizeH1: 3rem;
        --fontSizeH2: 1.6rem;

        @media (min-width: 400px) {
            --bodyFontSize: 16px;
            --fontSizeH1: 4rem;
            --fontSizeH2: 2rem;
        }

        @media (min-width: 900px) {
            --bodyFontSize: 20px;
            --fontSizeH1: 4.5rem;
            --fontSizeH2: 2.4rem;
        }

        /* Colours */
        --backgroundColour: #41444d;
        --primaryColour: #e39ec1;
        --accentColour: #77567a;
        --highContrastColour: #fff;

        /* Spacing */
        --contentMaxWidth: 900px;
        --defaultMargin: 1rem;
        --defaultPadding: 1rem;
        --pageMargin: 0 1rem;
        --homeDrawingPaddingLeft: 0.5rem;
        --navAlignment: center;


        @media (min-width: 400px) {
            --defaultMargin: 1rem;
            --defaultPadding: 1rem;
            --pageMargin: 0 3rem;
            --homeDrawingPaddingLeft: 2rem;
        }

        @media (min-width: 900px) {
            --defaultMargin: 1rem;
            --defaultPadding: 1rem;
            --pageMargin: 0 auto;
            --homeDrawingPaddingLeft: 3rem;
            --navAlignment: flex-end;
        }

        /* Random stuff */
        --footerColumns: 1;
        --mainImageSize: 700px;
        --aboutWrap: wrap;
        --aboutTextMargin: 0;

        @media (min-width: 700px) {
            --footerColumns: 2;
            --aboutWrap: no-wrap;
            --aboutTextMargin: var(--defaultMargin);
        }
    }

    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background-color: var(--backgroundColour);
        color: var(--primaryColour);
        font-family: var(--bodyFont);
        font-size: var(--bodyFontSize);
        height: 100vh;
    }

`;

export default CssVars;
