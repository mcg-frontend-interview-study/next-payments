import {useForm} from '@/hooks/useForm';
import {Field} from './Field';
import {Preview} from './Preview';
import {CardNumbers} from './Input/CardNumbers';
import {ExpirationDate} from './Input/ExpirationDate';
import {CardName} from './Input/CardName';

export const Form = () => {
  const {cardNumbers, expirationDate, cardName} = useForm();

  return (
    <form className="flex flex-col justify-center items-center gap-12 w-full">
      <Preview
        cardNumbers={cardNumbers.map(cardNumber => cardNumber.value)}
        expirationDate={expirationDate.map(expiration => expiration.value)}
        cardName={cardName.value}
      />
      <section>
        <Field title="결제할 카드 번호를 입력해 주세요" description="본인 명의의 카드만 결제 가능합니다.">
          <CardNumbers cardNumbers={cardNumbers} />
        </Field>
        <Field title="카드 유효기간을 입력해 주세요" description="월/년도(MMYY)를 순서대로 입력해 주세요.">
          <ExpirationDate expirationDate={expirationDate} />
        </Field>
        <Field title="카드 소유자 이름을 입력해 주세요">
          <CardName cardName={cardName} />
        </Field>
      </section>
    </form>
  );
};
