import {FieldType} from '@/hooks/useForm';

type CardNumbersProps = {
  cardNumbers: FieldType[];
};

export const CardNumbers = ({cardNumbers}: CardNumbersProps) => {
  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <legend className="font-medium text-xs/4 mb-2">카드번호</legend>
        {cardNumbers.map((cardNumber, index) => (
          <input
            autoFocus={index === 0}
            key={index}
            maxLength={4}
            className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
            placeholder="1234"
            value={cardNumber[0]}
            onChange={cardNumber[1]}
          />
        ))}
      </fieldset>
      <p className="font-normal text-[9px]/3 text-red">숫자만 입력 가능</p>
    </section>
  );
};
