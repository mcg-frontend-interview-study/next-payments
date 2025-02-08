import {CardCompanyStyle, CardInputs, EnglishCardCompanyName} from '@/types/card';

export const CARD_COMPANY = {
  bc: 'BC카드',
  shinhan: '신한카드',
  kakao: '카카오뱅크',
  hyndai: '현대카드',
  woori: '우리카드',
  lotte: '롯데카드',
  hana: '하나카드',
  kookmin: '국민카드',
} as const;

export const CARD_COMPANY_STYLE: Record<EnglishCardCompanyName, CardCompanyStyle> = {
  bc: {
    color: 'pink',
  },
  shinhan: {color: 'blue'},
  kakao: {color: 'yellow'},
  hyndai: {color: 'black'},
  woori: {color: 'skyblue'},
  lotte: {color: 'red'},
  hana: {color: 'green'},
  kookmin: {color: 'gray'},
};

export const CARD_RULE = {
  cvcLength: 3,
  cardNumberLength: 4,
  customerNameMaxLength: 30,
  expirationFormat: 'MM/YY',
  passwordLength: 2,
};

export const CARD_TYPE = {
  visa: {
    start: 4,
    length: 16,
  },

  masterCard: {
    start: 51,
    end: 55,
    length: 16,
  },
};

export const FORM_STEPS: (keyof CardInputs)[] = [
  'cardNumber',
  'cardCompany',
  'expiration',
  'customerName',
  'cvcNumber',
  'password',
];
