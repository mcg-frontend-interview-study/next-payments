import {cardInputs, setCardValidation} from '@/jotai/card';
import {isOnlyDigits} from '@/utils/number';
import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect, useState} from 'react';

const ERROR_MESSAGE = {
  onlyDigit: '숫자만 입력 가능합니다.',
  fillAll: '모든 입력을 완료해주세요.',
};

const useCVCNumberValidation = (CVC_LENGTH: number) => {
  const [errorMessage, setErrorMessage] = useState('');

  const cvcNumber = useAtomValue(cardInputs).cvcNumber;

  const setValidations = useSetAtom(setCardValidation);

  const validateCVCNumber = (value: string[]) => {
    if (!value.every(isOnlyDigits)) {
      setErrorMessage(ERROR_MESSAGE.onlyDigit);
      return;
    }
    if (!value.every(num => num.length === CVC_LENGTH)) {
      setErrorMessage(ERROR_MESSAGE.fillAll);
      return;
    }
    setErrorMessage('');
  };

  const isValidCVCNumber = (value: string) => {
    return isOnlyDigits(value) && value.length === CVC_LENGTH;
  };

  useEffect(() => {
    const isValid = cvcNumber.every(isValidCVCNumber);

    validateCVCNumber(cvcNumber);
    setValidations({field: 'cvcNumber', isValid});
  }, [cvcNumber]);

  return {
    errorMessage,
    isValidCVCNumber,
  };
};

export default useCVCNumberValidation;
