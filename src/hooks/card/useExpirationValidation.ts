import {cardInputs, setCardValidation} from '@/jotai/card';
import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect, useState} from 'react';
import {isOnlyDigits} from '@/utils/number';

const ERROR_MESSAGE = '올바른 MM/YY 형식의 날짜를 입력해주세요.';

const useExpirationValidation = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const expirationInput = useAtomValue(cardInputs).expiration;
  const setValidations = useSetAtom(setCardValidation);

  const isValidMonth = (month: string) => {
    if (month.length !== 2 || !isOnlyDigits(month)) return false;

    return Number(month) >= 1 && Number(month) <= 12;
  };

  const isValidYear = (year: string) => {
    if (year.length !== 2 || !isOnlyDigits(year)) return false;

    const currentYear = new Date().getFullYear() % 100;
    return Number(year) >= currentYear;
  };

  useEffect(() => {
    const isValid = isValidMonth(expirationInput[0]) && isValidYear(expirationInput[1]);

    setErrorMessage(isValid ? '' : ERROR_MESSAGE);
    setValidations({field: 'expiration', isValid});
  }, [expirationInput]);

  return {
    errorMessage,
    isValidMonth,
    isValidYear,
  };
};

export default useExpirationValidation;
