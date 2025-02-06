import {Field} from './Field';
import {Preview} from './Preview';

export const Form = () => {
  return (
    <form className="flex flex-col justify-center items-center gap-12 w-full">
      <Preview />
      <Field title="결제할 카드 번호를 입력해 주세요" description="본인 명의의 카드만 결제 가능합니다." />
    </form>
  );
};
