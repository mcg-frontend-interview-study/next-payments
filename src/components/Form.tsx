import {useForm} from '@/hooks/useForm';
import {Field} from './Field';
import {Preview} from './Preview';
import {CardNumbers} from './Input/CardNumbers';
import {ExpirationDate} from './Input/ExpirationDate';
import {CardName} from './Input/CardName';
import {CardBrand} from './Input/CardBrand';
import {CVC} from './Input/CVC';
import {Password} from './Input/Password';

export const Form = () => {
  const {cardNumbers, expirationDate, cardName, cardBrand, cvc, password, canSubmit} = useForm();

  return (
    <form className="relative flex flex-col justify-center items-center gap-12 w-full">
      <Preview
        cardNumbers={cardNumbers.map(cardNumber => cardNumber.value)}
        expirationDate={expirationDate.map(expiration => expiration.value)}
        cardName={cardName.value}
      />
      <section className="flex flex-col-reverse gap-4">
        <Field title="결제할 카드 번호를 입력해 주세요" description="본인 명의의 카드만 결제 가능합니다.">
          <CardNumbers cardNumbers={cardNumbers} />
        </Field>
        <Field title="카드사를 선택해 주세요" description="현재 국내 카드사만 가능합니다.">
          <CardBrand cardBrand={cardBrand} />
        </Field>
        <Field title="카드 유효기간을 입력해 주세요" description="월/년도(MMYY)를 순서대로 입력해 주세요.">
          <ExpirationDate expirationDate={expirationDate} />
        </Field>
        <Field title="카드 소유자 이름을 입력해 주세요">
          <CardName cardName={cardName} />
        </Field>
        <Field title="CVC 번호를 입력해 주세요">
          <CVC cvc={cvc} />
        </Field>
        <Field title="비밀번호를 입력해 주세요" description="앞의 2자리를 입력해주세요">
          <Password password={password} />
        </Field>
      </section>
      {canSubmit && (
        <button className="fixed bottom-0 w-full py-5 bg-gray text-center font-bold text-white2 text-base/3  hover:bg-grayVariants active:bg-grayVariants">
          확인
        </button>
      )}
    </form>
  );
};
