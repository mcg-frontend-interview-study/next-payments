import useFormProgress from '@/hooks/useFormProgress';
import CardCompanyForm from '../formItems/CardCompanyForm';
import CardNumberForm from '../formItems/CardNumberForm';
import CustomerNameForm from '../formItems/CustomerNameForm';
import CVCNumberForm from '../formItems/CVCNumberForm';
import ExpirationDateForm from '../formItems/ExpirationDateForm';
import PasswordForm from '../formItems/PasswordForm';
import {formContainerStyle, formStyle} from './styles';

const CardForm = () => {
  const {currentStep} = useFormProgress();

  return (
    <form css={formStyle}>
      <div css={formContainerStyle}>
        {currentStep >= 1 && <CardNumberForm />}
        {currentStep >= 2 && <CardCompanyForm />}
        {currentStep >= 3 && <ExpirationDateForm />}
        {currentStep >= 4 && <CustomerNameForm />}
        {currentStep >= 5 && <CVCNumberForm />}
        {currentStep >= 6 && <PasswordForm />}
      </div>
    </form>
  );
};

export default CardForm;
