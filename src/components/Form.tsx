import {useForm} from '@/hooks/useForm';
import {Field} from './Field';
import {Preview} from './Preview';
import {CardNumbers} from './Input/CardNumbers';

export const Form = () => {
  const {cardNumbers, expirationDate, cardName} = useForm();
  return (
    <form className="flex flex-col justify-center items-center gap-12 w-full">
      <Preview />
      <Field title="결제할 카드 번호를 입력해 주세요" description="본인 명의의 카드만 결제 가능합니다.">
        <CardNumbers cardNumbers={cardNumbers} />
      </Field>
    </form>
  );
};
