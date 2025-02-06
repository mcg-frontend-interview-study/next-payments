import {useInput} from './useInput';

export type FieldType = [string, OnChange];
type OnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

type ReturnUseForm = {
  cardNumbers: FieldType[];
  expirationDate: FieldType[];
  cardName: FieldType;
};

export const useForm = (): ReturnUseForm => {
  const {value: first, onChange: onFirstChange} = useInput({});
  const {value: second, onChange: onSecondChange} = useInput({});
  const {value: third, onChange: onThirdChange} = useInput({});
  const {value: fourth, onChange: onFourthChange} = useInput({});

  const {value: month, onChange: onMonthChange} = useInput({});
  const {value: year, onChange: onYearChange} = useInput({});

  const {value: name, onChange: onNameChange} = useInput({});

  return {
    cardNumbers: [
      [first, onFirstChange],
      [second, onSecondChange],
      [third, onThirdChange],
      [fourth, onFourthChange],
    ],
    expirationDate: [
      [month, onMonthChange],
      [year, onYearChange],
    ],
    cardName: [name, onNameChange],
  };
};
