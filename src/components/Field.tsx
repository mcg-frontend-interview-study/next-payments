type FieldProps = {
  title: string;
  description?: string;
};

export const Field = ({title, description}: FieldProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg/6">{title}</p>
        {description && <p className="font-normal text-[9px]/3 text-label">{description}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <fieldset className="flex w-full gap-[10]">
          <legend className="font-medium text-xs/4 mb-2">카드번호</legend>
          <input className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3" placeholder="1234" />
          <input className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3" placeholder="1234" />
          <input className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3" placeholder="1234" />
          <input className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3" placeholder="1234" />
        </fieldset>
        <p className="font-normal text-[9px]/3 text-red">숫자만 입력 가능</p>
      </div>
    </div>
  );
};
