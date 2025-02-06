import {cardInputs, setCardValidation} from '@/jotai/card';
import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect, useState} from 'react';
import {isOnlyDigits} from '@/utils/number';

const ERROR_MESSAGE = '숫자만 입력 가능합니다.';

const useCardNumberValidation = (CARD_NUMBER_LENGTH: number) => {
  const [errorMessage, setErrorMessage] = useState('');

  const cardNumberInput = useAtomValue(cardInputs).cardNumber;

  const setValidations = useSetAtom(setCardValidation);

  const isValidCardNumberInput = (value: string) => {
    return isOnlyDigits(value) && value.length === CARD_NUMBER_LENGTH;
  };

  useEffect(() => {
    const isValid = cardNumberInput.every(cardNumber => isValidCardNumberInput(cardNumber));

    setErrorMessage(isValid ? '' : ERROR_MESSAGE);
    setValidations({field: 'cardNumber', isValid});
  }, [cardNumberInput]);

  return {
    errorMessage,
    isValidCardNumberInput,
  };
};

export default useCardNumberValidation;
