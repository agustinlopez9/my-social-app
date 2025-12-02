import { useTranslation } from "react-i18next";

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
}

const TextArea = ({ name, placeholder, ...props }: TextAreaProps) => {
  const { t } = useTranslation();
  return (
    <textarea
      className="bg-surface-input text-primary border-border-subtle focus:border-border-focus placeholder:text-placeholder min-h-24 w-full resize-none rounded-md border p-3 focus:outline-none"
      name={name}
      placeholder={placeholder || t("common.copy.textPlaceholder")}
      {...props}
    />
  );
};

export default TextArea;
