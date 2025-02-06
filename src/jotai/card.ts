import {CardInputs} from '@/types/card';
import {atom} from 'jotai';

export const cardInputs = atom<CardInputs>({
  cardNumber: ['', '', '', ''],
  expiration: ['', ''],
  customerName: [''],
  cvcNumber: [''],
  password: [''],
  cardCompany: null,
});

export const cardInputsValidation = atom({
  cardNumber: false,
  expiration: false,
  customerName: false,
  cvcNumber: false,
  password: false,
  cardCompany: false,
});

export const isCardFormValid = atom(get => {
  const validation = get(cardInputsValidation);
  return Object.values(validation).every(Boolean);
});

export const setCardInput = atom(
  null,
  (get, set, {field, index, value}: {field: keyof CardInputs; index: number; value: string}) => {
    const prev = get(cardInputs);

    if (Array.isArray(prev[field])) {
      const updatedArray = [...prev[field]];
      updatedArray[index] = value;

      set(cardInputs, {...prev, [field]: updatedArray});
    }
  },
);

export const setCardValidation = atom(
  null,
  (get, set, {field, isValid}: {field: keyof CardInputs; isValid: boolean}) => {
    const prevValidation = get(cardInputsValidation);
    set(cardInputsValidation, {...prevValidation, [field]: isValid});
  },
);
