import CardForm from '@/components/CardForm';
import CardPreview from '@/components/CardPreview';

export default function Home() {
  return (
    <main style={homeStyle}>
      <CardPreview />
      <CardForm />
    </main>
  );
}
const homeStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  border: '0.1rem solid gray',

  width: '80rem',
  minHeight: '100vh',
  flexGrow: '1',

  overflowY: 'auto',
  margin: 'auto',
};
