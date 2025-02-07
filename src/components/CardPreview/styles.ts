import {css} from '@emotion/react';

export const containerStyle = (color: string) => css`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  width: 30rem;
  height: 16rem;

  font-size: 1.6rem;
  border-radius: 0.7rem;

  color: white;
  background-color: ${color};

  position: relative;
`;

export const topContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const chipStyle = css`
  position: absolute;
  top: 1rem;
  left: 2rem;

  width: 4.2rem;
  height: 2.5rem;

  background-color: #eecd5c;
  border-radius: 0.6rem;
`;

export const cardTypeStyle = css`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 1rem;
  right: 2rem;

  width: 8.2rem;
  height: 2.5rem;
`;

export const bottomContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 0 3rem;
`;

export const lineStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: absolute;
  bottom: 2rem;

  background-color: #eecd5c;

  width: 100%;
  height: 3rem;
`;

export const cvcStyle = css`
  color: white;
  font-weight: bold;
  margin-right: 1rem;
`;
