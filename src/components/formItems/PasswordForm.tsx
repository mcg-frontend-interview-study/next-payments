import {InputContent, InputType} from '@/types/card';
import FormItem from '../common/FormItem';
import InputField from '../common/InputField';
import usePasswordValidation from '@/hooks/card/usePasswordValidation';

const INFO = {
  title: '비밀번호를 입력해 주세요',
};

const INPUT: InputType = {
  length: 2,
  type: 'password',
};

const CONTENT: InputContent = {
  id: 'password-input',
  fieldName: 'password',
  labelText: '비밀번호 앞 2자리',
  length: 1,
  content: [{...INPUT}],
};

const PasswordForm = () => {
  const {errorMessage, isValidPassword} = usePasswordValidation(INPUT.length);

  return (
    <FormItem title={INFO.title}>
      <InputField inputContent={CONTENT} errorMessage={errorMessage} validationFn={isValidPassword} />
    </FormItem>
  );
};

export default PasswordForm;
