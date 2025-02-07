import useCardCompanyStyle from '@/hooks/card/useCardCompanyStyle';
import CardNumberDisplay from '../CardNumberDisplay';
import CustomerNameDisplay from '../CustomerNameDisplay';
import ExpirationDateDisplay from '../ExpirationDateDisplay';
import {bottomContainer, cardTypeStyle, chipStyle, containerStyle, topContainer} from './styles';
import useCardType from '@/hooks/card/useCardType';

const CardPreview = () => {
  const {cardType} = useCardType();
  const {cardStyle} = useCardCompanyStyle();

  return (
    <article css={containerStyle(cardStyle.color)}>
      <div css={topContainer}>
        <div css={chipStyle} />
        <div css={cardTypeStyle}>{cardType}</div>
      </div>
      <div css={bottomContainer}>
        <CardNumberDisplay />
        <ExpirationDateDisplay />
        <CustomerNameDisplay />
      </div>
    </article>
  );
};

export default CardPreview;
