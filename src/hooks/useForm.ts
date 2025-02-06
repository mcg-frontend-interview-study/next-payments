import {validate} from '@/utils/validate';
import {useInput} from './useInput';
import useSelect from './useSelect';

export type FieldInputType = Omit<ReturnType<typeof useInput>, 'directlyChangeValue'>;
export type FieldSelectType = ReturnType<typeof useSelect>;

type ReturnUseForm = {
  cardNumbers: FieldInputType[];
  expirationDate: FieldInputType[];
  cardName: FieldInputType;
  cardBrand: FieldSelectType;
  cvc: FieldInputType;
  password: FieldInputType;
};

export const useForm = (): ReturnUseForm => {
  const first = useInput({validateOnChange: validate.cardNumbers.onChange});
  const second = useInput({validateOnChange: validate.cardNumbers.onChange});
  const third = useInput({validateOnChange: validate.cardNumbers.onChange});
  const fourth = useInput({validateOnChange: validate.cardNumbers.onChange});

  const month = useInput({validateOnChange: validate.expirationDate.month.onChange});
  const year = useInput({validateOnChange: validate.expirationDate.year.onChange});

  const name = useInput({validateOnChange: validate.name.onChange});

  const brand = useSelect('');

  const cvc = useInput({validateOnChange: validate.cvc.onChange});

  const password = useInput({validateOnChange: validate.password.onChange});

  return {
    cardNumbers: [first, second, third, fourth],
    expirationDate: [month, year],
    cardName: name,
    cardBrand: brand,
    cvc,
    password,
  };
};
