import InputDescription from '../InputDescription';

interface FormItemProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const FormItem = ({title, description, children}: FormItemProps) => {
  return (
    <article>
      <InputDescription title={title} description={description} />
      {children}
    </article>
  );
};

export default FormItem;
