import {cardInputs, setCardValidation} from '@/jotai/card';
import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect, useState} from 'react';

const ERROR_MESSAGE = '카드사를 선택해주세요.';

const useCardCompanyValidation = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const cardCompany = useAtomValue(cardInputs).cardCompany;
  const setValidations = useSetAtom(setCardValidation);

  useEffect(() => {
    const isValid = cardCompany !== null;

    setErrorMessage(isValid ? '' : ERROR_MESSAGE);
    setValidations({field: 'cardCompany', isValid});
  }, [cardCompany]);

  return {
    errorMessage,
  };
};

export default useCardCompanyValidation;
