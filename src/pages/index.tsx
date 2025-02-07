import CardForm from '@/components/CardForm';
import {buttonContainerStyle, buttonStyle} from '@/components/CardForm/styles';
import CardPreview from '@/components/CardPreview';
import Button from '@/components/common/Button';
import useFormProgress from '@/hooks/useFormProgress';

export default function Home() {
  const {isFormValid} = useFormProgress();

  return (
    <main style={homeStyle}>
      <CardPreview />
      <CardForm />

      {isFormValid && (
        <div css={buttonContainerStyle}>
          <Button type="submit" css={buttonStyle}>
            확인
          </Button>
        </div>
      )}
    </main>
  );
}

const homeStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-between',

  border: '0.1rem solid gray',

  width: '80rem',
  margin: '10rem auto',

  position: 'relative',
};
