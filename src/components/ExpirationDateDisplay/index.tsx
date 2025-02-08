import {cardInputs} from '@/jotai/card';
import {useAtomValue} from 'jotai';
import {containerStyle} from './styles';

const ExpirationDateDisplay = () => {
  const [month, year] = useAtomValue(cardInputs).expiration;

  return (
    <section css={containerStyle}>
      <span>{month}</span>
      {year?.length > 0 && (
        <>
          <span>/</span>
          <span>{year}</span>
        </>
      )}
    </section>
  );
};

export default ExpirationDateDisplay;
