interface RadioGroupTitleProps {
  title: string;
}

const RadioGroupTitle = ({ title }: RadioGroupTitleProps) => {
  return <legend>{title}</legend>;
};

export default RadioGroupTitle;
