type FieldProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const Field = ({title, description, children}: FieldProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-bold text-lg/6">{title}</p>
        {description && <p className="font-normal text-[9px]/3 text-label">{description}</p>}
      </div>
      {children}
    </div>
  );
};
