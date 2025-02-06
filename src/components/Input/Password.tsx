import {FieldInputType} from '@/hooks/useForm';

type PasswordProps = {
  password: FieldInputType;
};

export const Password = ({password}: PasswordProps) => {
  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <legend className="font-medium text-xs/4 mb-2">비밀번호 앞 2자리</legend>
        <input
          autoFocus
          className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
          placeholder="12"
          maxLength={2}
          type="password"
          value={password.value}
          onChange={password.onChange}
        />
      </fieldset>
      <p className="font-normal text-[9px]/3 text-red">{password.errorMessage}</p>
    </section>
  );
};
