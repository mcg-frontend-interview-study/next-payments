import useCardCompanyStyle from '@/hooks/card/useCardCompanyStyle';
import CardNumberDisplay from '../CardNumberDisplay';
import CustomerNameDisplay from '../CustomerNameDisplay';
import ExpirationDateDisplay from '../ExpirationDateDisplay';
import {bottomContainer, cardTypeStyle, chipStyle, containerStyle, cvcStyle, lineStyle, topContainer} from './styles';
import useCardType from '@/hooks/card/useCardType';
import {useAtomValue} from 'jotai';
import {cardInputs, focusedFieldAtom} from '@/jotai/card';

const CardPreview = () => {
  const {cardType} = useCardType();
  const {cardStyle} = useCardCompanyStyle();

  const cvcNumber = useAtomValue(cardInputs).cvcNumber;
  const focusedField = useAtomValue(focusedFieldAtom);

  return (
    <article css={containerStyle(cardStyle.color)}>
      {focusedField === 'cvcNumber' ? (
        <div css={lineStyle}>
          <span css={cvcStyle}>{cvcNumber}</span>
        </div>
      ) : (
        <>
          <div css={topContainer}>
            <div css={chipStyle} />
            <div css={cardTypeStyle}>{cardType}</div>
          </div>
          <div css={bottomContainer}>
            <CardNumberDisplay />
            <ExpirationDateDisplay />
            <CustomerNameDisplay />
          </div>
        </>
      )}
    </article>
  );
};

export default CardPreview;
