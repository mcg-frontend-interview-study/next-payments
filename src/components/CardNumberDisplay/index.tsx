import {cardInputs} from '@/jotai/card';
import {useAtomValue} from 'jotai';
import {containerStyle, privateNumberStyle, numberStyle} from './styles';

const PRIVATE_INDEX = 2;

const CardNumberDisplay = () => {
  const cardNumber = useAtomValue(cardInputs).cardNumber;

  return (
    <section css={containerStyle}>
      {cardNumber.map((num, idx) =>
        idx < PRIVATE_INDEX ? (
          <span key={idx} css={numberStyle}>
            {num}
          </span>
        ) : (
          <span key={idx} css={privateNumberStyle}>
            {'*'.repeat(num.length)}
          </span>
        ),
      )}
    </section>
  );
};

export default CardNumberDisplay;
