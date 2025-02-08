import {InputContent, InputType} from '@/types/card';
import FormItem from '../common/FormItem';
import InputField from '../common/InputField';
import useCustomerNameValidation from '@/hooks/card/useCustomerNameValidation';

const INFO = {
  title: '카드 소유자 이름을 입력해 주세요',
};

const INPUT: InputType = {
  placeholder: 'LEE YEJIN',
  length: 30,
  type: 'text',
};

const CONTENT: InputContent = {
  id: 'customer-name-input',
  fieldName: 'customerName',
  labelText: '소유자 이름',
  length: 1,
  content: [{...INPUT}],
};

const CustomerNameForm = () => {
  const {errorMessage, isValidCustomerName} = useCustomerNameValidation(INPUT.length);

  return (
    <FormItem title={INFO.title}>
      <InputField inputContent={CONTENT} errorMessage={errorMessage} validationFn={isValidCustomerName} />
    </FormItem>
  );
};

export default CustomerNameForm;
