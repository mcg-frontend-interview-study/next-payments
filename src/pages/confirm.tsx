import {cardInputs} from '@/jotai/card';
import {useAtomValue} from 'jotai';
import {CARD_COMPANY} from '@/constants/card';
import Button from '@/components/common/Button';
import {useRouter} from 'next/router';

export default function ConfirmPage() {
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/');
  };

  const {cardCompany, cardNumber} = useAtomValue(cardInputs);

  return (
    <main style={mainStyle}>
      <section style={containerStyle}>
        <h1 style={titleStyle}>🎉 카드 등록이 완료됐습니다!</h1>

        <p>{cardNumber[0]}로 시작하는</p>
        <p>{cardCompany && CARD_COMPANY[cardCompany]}가 등록되었어요.</p>
      </section>
      <Button onClick={handleSubmit}>확인</Button>
    </main>
  );
}

const mainStyle: React.CSSProperties = {
  fontSize: '1.4rem',

  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.5rem',

  marginBottom: '2rem',
};

const titleStyle: React.CSSProperties = {
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};
