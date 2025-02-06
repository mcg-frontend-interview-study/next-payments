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

export const CARD_RULE = {
  cvcLength: 3,
  cardNumberLength: 4,
  customerNameMaxLength: 30,
  expirationFormat: 'MM/YY',
  passwordLength: 2,
};
