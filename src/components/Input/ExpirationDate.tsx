import {FieldInputType} from '@/hooks/useForm';

type ExpirationDateProps = {
  expirationDate: FieldInputType[];
};

export const ExpirationDate = ({expirationDate}: ExpirationDateProps) => {
  const errorIndex = expirationDate.findIndex(expiration => expiration.errorMessage !== null);
  const errorMessage = errorIndex === -1 ? null : expirationDate[errorIndex].errorMessage;

  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <legend className="font-medium text-xs/4 mb-2">유효기간</legend>
        {expirationDate.map((expiration, index) => (
          <input
            autoFocus={index === 0}
            key={index}
            maxLength={2}
            className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
            placeholder={index === 0 ? 'MM' : 'YY'}
            value={expiration.value}
            onChange={expiration.onChange}
          />
        ))}
      </fieldset>
      <p className="font-normal text-[9px]/3 text-red">{errorMessage}</p>
    </section>
  );
};
