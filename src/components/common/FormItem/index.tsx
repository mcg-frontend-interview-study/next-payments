import InputDescription from '../InputDescription';

interface FormItemProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const FormItem = ({title, description, children}: FormItemProps) => {
  return (
    <fieldset>
      <InputDescription title={title} description={description} />
      {children}
    </fieldset>
  );
};

export default FormItem;
