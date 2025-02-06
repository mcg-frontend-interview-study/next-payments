import {css} from '@emotion/react';
import {forwardRef} from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: HTMLInputElement['id'];
  $isValid: boolean;
}

const Input = ({id, $isValid, ...rest}: InputProps, ref: React.Ref<HTMLInputElement>) => {
  return <input ref={ref} id={id} type="text" {...rest} css={inputStyle($isValid)} />;
};

const inputStyle = (isValid: boolean) => css`
  border-color: ${isValid ? 'gray' : 'red'};
`;

export default forwardRef(Input);
