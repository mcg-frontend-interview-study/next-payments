import {InputContent, InputType} from '@/types/card';
import FormItem from '../common/FormItem';
import InputField from '../common/InputField';
import useCVCNumberValidation from '@/hooks/card/useCVCNumberValidation';

const INFO = {
  title: 'CVC 번호를 입력해 주세요',
};

const INPUT: InputType = {
  placeholder: '123',
  length: 3,
  type: 'number',
};

const CONTENT: InputContent = {
  id: 'cvc-number-input',
  fieldName: 'cvcNumber',
  labelText: 'CVC',
  length: 1,
  content: [{...INPUT}],
};

const CVCNumberForm = () => {
  const {errorMessage, isValidCVCNumber} = useCVCNumberValidation(INPUT.length);

  return (
    <FormItem title={INFO.title}>
      <InputField inputContent={CONTENT} errorMessage={errorMessage} validationFn={isValidCVCNumber} />
    </FormItem>
  );
};

export default CVCNumberForm;
