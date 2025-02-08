import {InputContent, InputType} from '@/types/card';
import FormItem from '../common/FormItem';
import InputField from '../common/InputField';
import useCardNumberValidation from '@/hooks/card/useCardNumberValidation';

const INFO = {
  title: '결제할 카드 번호를 입력해 주세요',
  description: '본인 명의의 카드만 결제 가능합니다.',
};

const CARD_NUMBER_INPUT_COUNT = 4;

const INPUT: InputType = {
  placeholder: '1234',
  length: 4,
  type: 'number',
};

const CONTENT: InputContent = {
  id: 'card-number-inputs',
  fieldName: 'cardNumber',
  labelText: '카드 번호',
  length: CARD_NUMBER_INPUT_COUNT,
  content: Array.from({length: CARD_NUMBER_INPUT_COUNT}, () => ({...INPUT})),
};

const CardNumberForm = () => {
  const {errorMessage, isValidCardNumberInput} = useCardNumberValidation(INPUT.length);

  return (
    <FormItem title={INFO.title} description={INFO.description}>
      <InputField inputContent={CONTENT} errorMessage={errorMessage} validationFn={isValidCardNumberInput} />
    </FormItem>
  );
};

export default CardNumberForm;
