import {css} from '@emotion/react';

export const formStyle = css`
  display: flex;

  margin-top: 3rem;

  position: relative;
`;

export const formContainerStyle = css`
  display: flex;
  flex-direction: column-reverse;

  margin: 2rem 10rem;
  margin-bottom: 8rem;

  gap: 3rem;
`;

export const buttonContainerStyle = css`
  bottom: 0;
  width: 100%;

  text-align: center;
  z-index: 10;
  position: absolute;
`;

export const buttonStyle = css`
  width: 100%;

  height: 5rem;
  max-width: 80rem;
  margin: 0 auto;
`;
