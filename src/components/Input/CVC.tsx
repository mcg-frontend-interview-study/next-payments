import {FieldInputType} from '@/hooks/useForm';

type CVCProps = {
  cvc: FieldInputType;
};

export const CVC = ({cvc}: CVCProps) => {
  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <legend className="font-medium text-xs/4 mb-2">CVC</legend>
        <input
          autoFocus
          className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
          placeholder="123"
          maxLength={3}
          value={cvc.value.toUpperCase()}
          onChange={cvc.onChange}
        />
      </fieldset>
      <p className="font-normal text-[9px]/3 text-red">{cvc.errorMessage}</p>
    </section>
  );
};
