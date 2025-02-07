import {cardInputs, setCardValidation} from '@/jotai/card';
import {isOnlyDigits} from '@/utils/number';
import {useAtomValue, useSetAtom} from 'jotai';
import {useEffect, useState} from 'react';

const ERROR_MESSAGE = {
  onlyDigit: '숫자만 입력 가능합니다.',
  fillAll: '모든 입력을 완료해주세요.',
};

const usePasswordValidation = (PASSWORD_LENGTH: number) => {
  const [errorMessage, setErrorMessage] = useState('');

  const password = useAtomValue(cardInputs).password;

  const setValidations = useSetAtom(setCardValidation);

  const validatePassword = (value: string[]) => {
    if (!value.every(isOnlyDigits)) {
      setErrorMessage(ERROR_MESSAGE.onlyDigit);
      return;
    }
    if (!value.every(num => num.length === PASSWORD_LENGTH)) {
      setErrorMessage(ERROR_MESSAGE.fillAll);
      return;
    }
    setErrorMessage('');
  };

  const isValidPassword = (value: string) => {
    return isOnlyDigits(value) && value.length === PASSWORD_LENGTH;
  };

  useEffect(() => {
    const isValid = password.every(isValidPassword);

    validatePassword(password);
    setValidations({field: 'password', isValid});
  }, [password]);

  return {
    errorMessage,
    isValidPassword,
  };
};

export default usePasswordValidation;
