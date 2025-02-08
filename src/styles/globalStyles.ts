import {css} from '@emotion/react';

import reset from './reset';

const globalStyles = () => css`
  ${reset()}

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box !important;
  }

  input {
    border: 0.1rem solid gray;
    border-radius: 0.2rem;
    padding: 0.6rem 0.8rem;
    height: 3rem;
  }

  button {
    cursor: pointer;
  }
`;

export default globalStyles;
