import {cardInputs, setCardValidation} from '@/jotai/card';
import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect, useState} from 'react';

const ERROR_MESSAGE = '30자 이내의 영문 대문자만 입력 가능합니다. ';

const useCustomerNameValidation = (NAME_MAX_LENGTH: number) => {
  const [errorMessage, setErrorMessage] = useState('');

  const customerName = useAtomValue(cardInputs).customerName;

  const setValidations = useSetAtom(setCardValidation);

  const isValidCustomerName = (value: string) => {
    return /^[A-Z]+$/.test(value) && value.length <= NAME_MAX_LENGTH && value.length >= 1;
  };

  useEffect(() => {
    const isValid = customerName.every(isValidCustomerName);

    setErrorMessage(isValid ? '' : ERROR_MESSAGE);
    setValidations({field: 'customerName', isValid});
  }, [customerName]);

  return {
    errorMessage,
    isValidCustomerName,
  };
};

export default useCustomerNameValidation;
