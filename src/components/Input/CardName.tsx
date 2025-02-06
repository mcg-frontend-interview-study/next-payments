import {FieldInputType} from '@/hooks/useForm';

type CardNameProps = {
  cardName: FieldInputType;
};

export const CardName = ({cardName}: CardNameProps) => {
  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <legend className="font-medium text-xs/4 mb-2">소유자 이름</legend>
        <input
          autoFocus
          className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
          maxLength={20}
          placeholder="JOHN DOE"
          value={cardName.value.toUpperCase()}
          onChange={cardName.onChange}
        />
      </fieldset>
      <p className="font-normal text-[9px]/3 text-red">{cardName.errorMessage}</p>
    </section>
  );
};
