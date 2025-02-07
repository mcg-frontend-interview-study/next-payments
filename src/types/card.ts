import {CARD_COMPANY} from '@/constants/card';

export interface CardInputs {
  cardNumber: string[];
  expiration: string[];
  customerName: string[];
  cardCompany: keyof typeof CARD_COMPANY | null;
  cvcNumber: string[];
  password: string[];
}

export interface InputType {
  length: number;
  type: 'text' | 'number' | 'password';
  placeholder?: string;
}

export interface Content {
  id: string;
  labelText: string;
  fieldName: keyof CardInputs;
}

export interface InputContent extends Content {
  length: number;
  content: InputType[];
}

export type EnglishCardCompanyName = keyof typeof CARD_COMPANY;
export type KoreanCardCompanyName = (typeof CARD_COMPANY)[keyof typeof CARD_COMPANY];
