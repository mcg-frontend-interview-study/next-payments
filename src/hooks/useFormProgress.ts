import {useAtomValue} from 'jotai';
import {cardInputsValidation, isCardFormValid} from '@/jotai/card';
import {FORM_STEPS} from '@/constants/card';

const useFormProgress = () => {
  const validationState = useAtomValue(cardInputsValidation);
  const isFormValid = useAtomValue(isCardFormValid);

  const currentStepIndex = FORM_STEPS.findIndex(step => !validationState[step]);
  const currentStep = currentStepIndex === -1 ? FORM_STEPS.length : currentStepIndex + 1;

  return {currentStep, isFormValid};
};

export default useFormProgress;
