import CardForm from '@/components/CardForm';
import {buttonContainerStyle, buttonStyle} from '@/components/CardForm/styles';
import CardPreview from '@/components/CardPreview';
import Button from '@/components/common/Button';
import useFormProgress from '@/hooks/useFormProgress';
import {useRouter} from 'next/router';

export default function Home() {
  const {isFormValid} = useFormProgress();
  const router = useRouter(); // ✅ Next.js Router 훅 사용

  const handleSubmit = () => {
    router.push('/confirm'); // ✅ 이동할 페이지 경로 설정
  };

  return (
    <main style={homeStyle}>
      <CardPreview />
      <CardForm />

      {isFormValid && (
        <div css={buttonContainerStyle}>
          <Button type="submit" onClick={handleSubmit} css={buttonStyle}>
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
