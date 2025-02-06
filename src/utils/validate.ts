import {ErrorInfo} from '@/type/serviceType';

const isNumberOnly = (str: string) => /^[0-9]+$/.test(str);
const isValidName = (str: string) => /^[A-Za-z\s]+$/.test(str);

export const validate = {
  cardNumbers: {
    onChange: (caraNumber: string) => {
      const errorInfo: ErrorInfo = {
        errorMessage: null,
        reset: null,
      };

      if (!isNumberOnly(caraNumber)) {
        errorInfo.errorMessage = '숫자만 입력 가능합니다.';
        errorInfo.reset = (value: string) => value.replace(/\D/g, '');
      } else if (caraNumber.length < 4) {
        errorInfo.errorMessage = '4자리 숫자를 입력해야합니다.';
        errorInfo.reset = (value: string) => value;
      } else {
        errorInfo.errorMessage = null;
        errorInfo.reset = null;
      }

      return errorInfo;
    },
  },
  expirationDate: {
    month: {
      onChange: (value: string) => {
        const errorInfo: ErrorInfo = {
          errorMessage: null,
          reset: null,
        };

        const sanitizedValue = value.replace(/\D/g, '');

        if (sanitizedValue.length < 2) {
          errorInfo.errorMessage = '월(MM)은 2자리 숫자로 입력해야 합니다.';
          errorInfo.reset = (value: string) => value.replace(/\D/g, '');
        } else {
          const month = parseInt(sanitizedValue, 10);
          if (month < 1 || month > 12) {
            errorInfo.errorMessage = '유효한 월을 입력하세요. (01-12)';
            errorInfo.reset = (value: string) => value;
          } else {
            errorInfo.errorMessage = null;
            errorInfo.reset = null;
          }
        }

        return errorInfo;
      },
    },

    year: {
      onChange: (value: string) => {
        const errorInfo: ErrorInfo = {
          errorMessage: null,
          reset: null,
        };

        const sanitizedValue = value.replace(/\D/g, '');

        if (sanitizedValue.length < 2) {
          errorInfo.errorMessage = '연도(YY)는 2자리 숫자로 입력해야 합니다.';
          errorInfo.reset = (value: string) => value.replace(/\D/g, '');
        } else {
          const year = parseInt(sanitizedValue, 10);
          const currentYear = Number(new Date().getFullYear().toString().slice(2));

          if (year < currentYear) {
            errorInfo.errorMessage = `유효한 연도를 입력해주세요. (${currentYear}-99)`;
            errorInfo.reset = (value: string) => value;
          } else {
            errorInfo.errorMessage = null;
            errorInfo.reset = null;
          }
        }

        return errorInfo;
      },
    },
  },

  name: {
    onChange: (value: string) => {
      const errorInfo: ErrorInfo = {
        errorMessage: null,
        reset: null,
      };

      if (!isValidName(value)) {
        errorInfo.errorMessage = '이름은 영어와 공백만 입력 가능합니다.';
        errorInfo.reset = (v: string) => v.replace(/[^A-Za-z\s]/g, '');
      } else {
        errorInfo.errorMessage = null;
        errorInfo.reset = null;
      }

      return errorInfo;
    },
  },
};
