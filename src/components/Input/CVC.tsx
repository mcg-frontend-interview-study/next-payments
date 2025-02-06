import {useCardFlippedContext} from '@/context/CardFlippedContext';
import {FieldInputType} from '@/hooks/useForm';
import {Step} from '../Form';

type CVCProps = {
  cvc: FieldInputType;
  nextStep: Step;
  handleNext: (nextStep: Step) => void;
};

export const CVC = ({cvc, nextStep, handleNext}: CVCProps) => {
  const {setIsFlipped} = useCardFlippedContext();

  const handleFocus = () => {
    setIsFlipped(true);
  };

  const handleBlur = () => {
    setIsFlipped(false);
    if (cvc.value !== '' && cvc.errorMessage === null) {
      handleNext(nextStep);
    }
  };

  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <legend className="font-medium text-xs/4 mb-2">CVC</legend>
        <input
          autoFocus
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
          placeholder="123"
          maxLength={3}
          value={cvc.value}
          onChange={cvc.onChange}
        />
      </fieldset>
      <p className="font-normal text-[9px]/3 text-red">{cvc.errorMessage}</p>
    </section>
  );
};
