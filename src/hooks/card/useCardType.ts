import {CARD_TYPE} from '@/constants/card';
import {cardInputs} from '@/jotai/card';
import {CardType} from '@/types/card';
import {useAtomValue} from 'jotai';
import {useEffect, useState} from 'react';

const useCardType = () => {
  const [cardType, setCardType] = useState<CardType | null>(null);
  const cardNumber = useAtomValue(cardInputs).cardNumber;

  const isVisaCard = (cardNumber: string[]) => {
    const firstNumber = cardNumber[0] ?? '';

    return Number(firstNumber.at(0)) === CARD_TYPE.visa.start;
  };

  const isMasterCard = (cardNumber: string[]) => {
    const firstNumber = cardNumber[0] ?? '';

    const firstTwoDigits = Number(firstNumber.slice(0, 2));
    return firstTwoDigits >= CARD_TYPE.masterCard.start && firstTwoDigits <= CARD_TYPE.masterCard.end;
  };

  const getCardType = (cardNumber: string[]): CardType | null => {
    if (isVisaCard(cardNumber)) return 'visa';
    if (isMasterCard(cardNumber)) return 'masterCard';
    return null;
  };

  useEffect(() => {
    setCardType(getCardType(cardNumber));
  }, [cardNumber]);

  return {
    cardType,
  };
};

export default useCardType;
