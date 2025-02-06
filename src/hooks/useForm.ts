import {validate} from '@/utils/validate';
import {useInput} from './useInput';

export type FieldType = Omit<ReturnType<typeof useInput>, 'directlyChangeValue'>;

type ReturnUseForm = {
  cardNumbers: FieldType[];
  expirationDate: FieldType[];
  cardName: FieldType;
};

export const useForm = (): ReturnUseForm => {
  const first = useInput({validateOnChange: validate.cardNumbers.onChange});
  const second = useInput({validateOnChange: validate.cardNumbers.onChange});
  const third = useInput({validateOnChange: validate.cardNumbers.onChange});
  const fourth = useInput({validateOnChange: validate.cardNumbers.onChange});

  const month = useInput({validateOnChange: validate.expirationDate.month.onChange});
  const year = useInput({validateOnChange: validate.expirationDate.year.onChange});

  const name = useInput({validateOnChange: validate.name.onChange});

  return {
    cardNumbers: [first, second, third, fourth],
    expirationDate: [month, year],
    cardName: name,
  };
};
