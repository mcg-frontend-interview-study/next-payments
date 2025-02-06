import {containerStyle, descriptionStyle, titleStyle} from './styles';

interface InputLablesProps {
  title: string;
  description?: string;
}

const InputDescription = ({title, description}: InputLablesProps) => {
  return (
    <section css={containerStyle}>
      <h2 css={titleStyle}>{title}</h2>
      <p css={descriptionStyle}>{description}</p>
    </section>
  );
};

export default InputDescription;
