import {CARD_COMPANY_STYLE} from '@/constants/card';
import {cardInputs} from '@/jotai/card';
import {useAtomValue} from 'jotai';
import {useMemo} from 'react';

const DEFAULT_STYLE = {
  color: 'black',
};

const useCardCompanyStyle = () => {
  const cardCompany = useAtomValue(cardInputs).cardCompany;

  const cardStyle = useMemo(() => {
    return cardCompany ? CARD_COMPANY_STYLE[cardCompany] : DEFAULT_STYLE;
  }, [cardCompany]);

  return {cardStyle};
};

export default useCardCompanyStyle;
