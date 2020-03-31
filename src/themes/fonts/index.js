import { createGlobalStyle } from 'styled-components';

import Avalanche from './avalanche.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Avalanche';
        src: local('Avalanche'),
        url(${Avalanche}) format('opentype');
        font-weight: 800;
        font-style: normal;
    }
`;
