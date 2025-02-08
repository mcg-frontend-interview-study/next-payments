import {InputContent, InputType} from '@/types/card';
import FormItem from '../common/FormItem';
import InputField from '../common/InputField';
import useExpirationValidation from '@/hooks/card/useExpirationValidation';

const INFO = {
  title: '카드 유효기간을 입력해주세요',
  description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
};

const MONTH_INPUT: InputType = {
  placeholder: 'MM',
  length: 2,
  type: 'number',
};

const YEAR_INPUT: InputType = {
  placeholder: 'YY',
  length: 2,
  type: 'number',
};

const CONTENT: InputContent = {
  id: 'expiration-inputs',
  fieldName: 'expiration',
  labelText: '유효기간',
  length: 2,
  content: [{...MONTH_INPUT}, {...YEAR_INPUT}],
};

const ExpirationDateForm = () => {
  const {errorMessage, isValidMonth, isValidYear} = useExpirationValidation();
  const validationFnList = {
    0: isValidMonth,
    1: isValidYear,
  };

  return (
    <FormItem title={INFO.title} description={INFO.description}>
      <InputField inputContent={CONTENT} errorMessage={errorMessage} validationFnList={validationFnList} />
    </FormItem>
  );
};

export default ExpirationDateForm;
