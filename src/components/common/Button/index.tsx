import {CSSProperties} from 'react';
import {buttonStyle} from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $style?: CSSProperties;
}

const Button = ({$style, ...rest}: ButtonProps) => {
  return <button type="button" css={buttonStyle} style={$style} {...rest} />;
};

export default Button;
